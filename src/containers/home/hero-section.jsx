import React, { useEffect, useState } from 'react';
import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers/react';
import BasicButton from "@/components/buttons/basic-button-component";
import { BsArrowRight } from "react-icons/bs";
import StakeSlartForm from '../forms/stake-slart-form';

const HeroSection = () => {
    const { open } = useWeb3Modal();
    const { address, isConnected } = useWeb3ModalAccount()
    const [bnbRate, setBnbRate] = useState(10000);
    const [usdtRate, setUsdtRate] = useState(5000);

    const connectWallet = async () => {
            await open();
    };



    return (
        <div className="w-full h-auto">
            <div className="md:w-[80%] lg:w-[75%] mx-auto flex flex-col items-center gap-6 mt-10 md:mt-16">
                <h3 className="text-[38px] leading-[44px] md:text-[62px] md:leading-[70px] font-machina text-center">
                    Slart The Greatest Airdrop of All Time
                </h3>
                <span className="text-[14px] leading-[20px] md:text-[20px] font-[350] md:leading-[30px] font-poppins text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
                <BasicButton
                    className="gap-2 !w-[260px] !bg-[#FFFFFF1A] !border-[1px] !border-[#FFFFFF] !rounded-[30px] mt-2"
                    onClick={connectWallet}
                >
                    {
                        isConnected ?
                            <span className="font-machina text-[18px] font-[350]" title={address}>{`${address.substring(0, 9)}...`}</span>
                            :
                            <>
                                <span className="font-machina text-[18px] font-[350]">Connect Wallet</span>
                                <BsArrowRight size={15} />
                            </>
                    }
                </BasicButton>
                {/* {isConnected && (
                    <BasicButton
                        className="gap-2 !w-[200px] !bg-[#FF00001A] !border-[1px] !border-[#FF0000] !rounded-[30px] mt-2"
                        onClick={disconnectWallet}
                    >
                        <span className="font-machina text-[13px] font-[350]">Disconnect Wallet</span>
                    </BasicButton>
                )} */}
                <div className="mt-6">
                    <StakeSlartForm bnbRate={bnbRate} usdtRate={usdtRate} />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
