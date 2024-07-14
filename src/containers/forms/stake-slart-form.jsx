'use client';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { CgArrowsExchangeV } from "react-icons/cg";
import Image from 'next/image';
import BasicButton from '@/components/buttons/basic-button-component';
import { presaleContractABI } from '@/utils/presale';
import { BrowserProvider, Contract, parseUnits, formatUnits } from 'ethers';
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react';
import axios from 'axios';

export default function StakeSlartForm() {
    const PresaleAddressBnb = '0xDEce771ed6c25EFBA35Bc628d94d5dD797AAEd80';
    const solWalletAddress = '6PVFgdUon3HrDhRYF68DFktRWYASVtnNRLuiMkN8zcvw';

    const { address, chainId, isConnected } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();
    const [loading, setLoading] = useState(false);
    const [refresh, setRefresh] = useState(0);
    const [slartToken, setSlartToken] = useState(0);
    const [coins, setCoins] = useState([
        {
            name: "BNB",
            imageUrl: "/images/binance.png",
            rate: 0,
            isActive: true,
            disabled: false,
        },
        {
            name: "SOL",
            imageUrl: "/images/sol.png",
            rate: 0,
            isActive: false,
            disabled: false,
        },
    ]);

    const [coinValue, setCoinValue] = useState("");
    const [slartValue, setSlartValue] = useState("");
    const [usdValue, setUsdValue] = useState("");
    const [progress, setProgress] = useState(0);
    const [weiRaised, setWeiRaised] = useState(0);
    const [maxBnb, setMaxBnb] = useState(0);

    const fetchConversionRates = async () => {
        try {
            const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin,solana&vs_currencies=usd');
            const bnbRate = response.data.binancecoin.usd;
            const solRate = response.data.solana.usd;
            setCoins(coins.map(coin => {
                if (coin.name === 'BNB') coin.rate = bnbRate;
                if (coin.name === 'SOL') coin.rate = solRate;
                return coin;
            }));
        } catch (error) {
            console.error('Error fetching conversion rates:', error);
        }
    };

    useEffect(() => {
        fetchConversionRates();
    }, []);

    const handleCoinClick = (clickedCoin) => {
        setCoins(coins.map(coin =>
            coin.name === clickedCoin.name
                ? { ...coin, isActive: true }
                : { ...coin, isActive: false }
        ));
        setCoinValue("");
        setSlartValue("");
        setUsdValue("");
    };

    const activeCoin = coins.find(coin => coin.isActive);

    const handleCoinValueChange = (e) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setCoinValue(value);
            const slartVal = value ? (parseFloat(value) * activeCoin.rate).toFixed(2) : "";
            setSlartValue(slartVal);
            setUsdValue(slartVal);
        }
    };

    const handleSlartValueChange = (e) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setSlartValue(value);
            const coinVal = value ? (parseFloat(value) / activeCoin.rate).toFixed(2) : "";
            setCoinValue(coinVal);
            setUsdValue(coinVal * activeCoin.rate);
        }
    };

    const buySlart = async (amount, token) => {
        if (!isConnected) {
            toast.error('Please connect your wallet first');
            return;
        }
        setLoading(true);
        try {
            if (token === 'BNB') {
                const ethersProvider = new BrowserProvider(walletProvider);
                const signer = await ethersProvider.getSigner();
                const presaleContractBnb = new Contract(PresaleAddressBnb, presaleContractABI, signer);
                const amountInWei = parseUnits(amount.toString(), 18);

                const transaction = await presaleContractBnb.buyTokens(address, {
                    value: amountInWei,
                    gasLimit: 300000
                });

                await transaction.wait();
                setLoading(false);
                setRefresh(Math.random());
            }
        } catch (error) {
            setLoading(false);
            console.error('Error purchasing Slart:', error);

            let errorMessage = 'Transaction failed. Please try again.';
            if (error?.data?.message) {
                if (error.data.message.includes('insufficient funds')) {
                    errorMessage = 'Insufficient funds for gas * price + value. Please check your wallet balance.';
                } else if (error.data.message.includes('Internal JSON-RPC error')) {
                    errorMessage = 'Internal JSON-RPC error. Please try again later.';
                } else {
                    errorMessage = error.message;
                }
            }

            toast.error(errorMessage);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const amount = parseFloat(coinValue);
        if (isNaN(amount) || amount <= 0) {
            toast.error('Please enter a valid amount');
            return;
        }
        await buySlart(amount, activeCoin.name);
    };

    const copySolAddress = () => {
        navigator.clipboard.writeText(solWalletAddress);
        toast("SOL address Copied to Clipboard!");
    }

    useEffect(() => {
        const fetchContractData = async () => {
            try {
                if (typeof window.ethereum !== 'undefined' ) {
                    const ethersProvider = new BrowserProvider(walletProvider);
                    const signer = await ethersProvider.getSigner();
                    const presaleContractBnb = new Contract(PresaleAddressBnb, presaleContractABI, signer);
                    if(isConnected){
                        const slart = await presaleContractBnb.purchasedTokens(address);
                        setSlartToken(parseFloat(slart));
                    }
                    const weiRaised = await presaleContractBnb.weiRaised();
                    const maxBnb = await presaleContractBnb.weiMaxPurchaseBnb();

                    const weiRaisedInEth = parseFloat(formatUnits(weiRaised, 18));
                    const maxBnbInEth = parseFloat(formatUnits(maxBnb, 18));

                    const progress = Math.min((weiRaisedInEth / maxBnbInEth) * 100, 100);

                    setWeiRaised(weiRaisedInEth * activeCoin.rate);
                    setMaxBnb(maxBnbInEth * activeCoin.rate);
                    setProgress(progress);
                }
            } catch (error) {
                console.log(`An error occurred`, error);
            }

        }

        fetchContractData();
    }, [refresh, isConnected]);

    return (
        <div className="relative flex flex-col items-center gap-8 md:gap-10 rounded-[16px] bg-[#FFFFFF05] border-[1px] border-[#FFFFFF] px-[20px] py-[40px] md:p-[60px]  w-[95vw] md:w-[630px]">
            <div className='flex flex-col items-center justify-center gap-3'>
                <h3 className='text-center text-[22px] leading-[24px] font-machina font-[700]'>Buy and stake Slart</h3>
                <span className='text-center text-[16px] leading-[22px] font-poppins font-[350]'>Lorem ipsum dolor sit amet, consectetur adipiscing </span>
            </div>
            <div className="flex items-center gap-2">
                {
                    coins.map((c, index) =>
                        <button
                            disabled={c.disabled}
                            key={index}
                            className={`text-14px font-poppins py-[8px] px-[30px] ${c.isActive ? "rounded-[32px] bg-[#FFFFFF1F] border-[1px] border-[#FFFFFF]" : ""}`}
                            onClick={() => handleCoinClick(c)}
                        >
                            {c.name}
                        </button>
                    )
                }
            </div>
            <div className="flex flex-col gap-2 font-poppins w-full">
                <div className="flex justify-between text-[12px] font-[500] text-[#FFFFFFBF]">
                    <span className='ml-14'>$200,000</span>
                    <span className='text-white font-[800]'>$2,000,000</span>
                </div>
                <div className="w-full bg-white rounded-[8px] h-[14px] mt-2">
                    <div className="bg-[#7220B9] h-full rounded-l-[8px] transition-all duration-300" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="flex justify-between text-[14px] font-[500] text-[#FFFFFFBF]">
                    <span className='ml-14'>Softcap</span>
                    <span>Hardcap</span>
                </div>
            </div>

            {activeCoin.name === 'SOL' ? (
                <div className="flex flex-col items-center gap-6 w-full">
                    <h4 className="text-[16px] font-poppins text-[#FFFFFFB2]">Send SOL to the address below:</h4>
                    <div className='bg-[#27173A] h-[52px] rounded-[4px] border-[1px] border-[#444444] flex gap-6 p-4 items-center w-full '>
                        <span className='text-[#FFFFFFB2] overflow-x-auto overflow-y-hidden'>{solWalletAddress}</span>
                        <button
                            className="ml-auto text-[#FFFFFFB2] hover:text-[#FFFFFF]"
                            onClick={copySolAddress}
                        >
                            Copy
                        </button>
                    </div>
                </div>
            ) : (
                <form className="flex flex-col items-center gap-6 w-full" onSubmit={handleSubmit}>
                    
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="coin-input" className='text-[16px] font-poppins uppercase'>{activeCoin.name}</label>
                        <div className='bg-[#27173A] h-[52px] rounded-[4px] border-[1px] border-[#444444] flex gap-6 p-4 items-center'>
                            <input
                                id="coin-input"
                                type="text"
                                required
                                placeholder={`Enter ${activeCoin.name} value`}
                                className='flex-1 h-full bg-inherit outline-none text-[#FFFFFFB2]'
                                value={coinValue}
                                onChange={handleCoinValueChange}
                            />
                            <div className="w-[1px] h-[100%] bg-[#444444]"></div>
                            <div className="flex gap-2 items-center">
                                <Image
                                    width={18}
                                    height={10}
                                    src={activeCoin.imageUrl}
                                    alt="logo"
                                />
                                <span className='text-[12px] text-[#FFFFFFE5] uppercase'>{activeCoin.name}</span>
                            </div>
                        </div>
                        {usdValue && <span className='text-[14px] text-[#FFFFFFBF]'>≈ ${usdValue} USD</span>}
                    </div>

                    <div className="w-[40px] h-[40px] rounded-[50%] bg-[#FFFFFF14] border-[1px] border-[#FFFFFF] flex items-center justify-center text-[20px]">
                        <CgArrowsExchangeV />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="slart-input" className='text-[16px] font-poppins'>Slart</label>
                        <div className='bg-[#27173A] h-[52px] rounded-[4px] border-[1px] border-[#444444] flex gap-6 p-4 items-center'>
                            <input
                                id="slart-input"
                                type="text"
                                required
                                placeholder='Receive Slrt'
                                className='flex-1 h-full bg-inherit outline-none text-[#FFFFFFB2]'
                                value={slartValue}
                                onChange={handleSlartValueChange}
                            />
                            <div className="w-[1px] h-[100%] bg-[#444444]"></div>
                            <div className="flex gap-2 items-center">
                                <Image
                                    width={18}
                                    height={10}
                                    src="/images/logo-head.png"
                                    alt="logo"
                                />
                                <span className='text-[12px] text-[#FFFFFFE5]'>Slrt</span>
                            </div>
                        </div>
                    </div>
                    {
                        isConnected &&
                        <span className='text-center font-machina'>{slartToken > 0? `You have ${slartToken} slarts` : "You have no slart yet."}</span>
                    }
                    <BasicButton
                        disabled={loading}
                        type='submit'
                        className="gap-2 !w-[240px] !md:w-[300px] !bg-secondary !rounded-[30px] mt-4 shadow-md shadow-primary"
                        loading={loading}
                    >
                        <span className="font-machina text-[18px] font-[350]">Buy Slart now</span>
                    </BasicButton>
                </form>
            )}
            <div className="hidden md:block absolute w-[98px] h-[93px] bg-[#7304C2] left-8 top-8 blur-[30px]"></div>
        </div>
    );
}
