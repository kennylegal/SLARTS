"use client";
import BasicButton from "@/components/buttons/basic-button-component";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";

const ConnectWalletModal = ({ setIsOpen }) => {

    const wallets = [
        {
            name: "Wallet Connect",
            imgUrl: "/images/wallet-connect.png"
        },
        {
            name: "Binance",
            imgUrl: "/images/binance.png"
        },
        {
            name: "Meta Mask",
            imgUrl: "/images/meta-mask.png"
        },
        {
            name: "Coinbase Wallet",
            imgUrl: "/images/coinbase.png"
        },
        {
            name: "Trust Wallet",
            imgUrl: "/images/trust-wallet.png"
        },

    ]

    return (
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div class="w-[90vw] max-h-[90vh] md:w-[500px] rounded-[8px] bg-[#081110] border-[1px] border-[#FFFFFF66] overflow-y-auto hide-scrollbar p-[20px] md:p-[30px] flex flex-col items-center gap-6">
                <div className="flex justify-between items-center w-full">
                    <span className="text-[20px] md:text-[24px] font-machina">Connect a Wallet</span>
                    <button onClick={() => setIsOpen(false)} >
                        <LiaTimesSolid size={20} />
                    </button>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    {
                        wallets.map((w, index) =>
                            <button key={Math.random() * 78} className="w-full flex justify-between items-center p-[20px] rounded-[4px] bg-[#212028] border-[1px] border-[#FFFFFF80]">
                                <span className="text-[14px] md:text-[16px] font-poppins">{w.name}</span>
                                <Image
                                    width={32}
                                    height={32}
                                    alt="coin-logo"
                                    src={w.imgUrl}
                                />
                            </button>
                        )
                    }
                </div>
                <BasicButton
                    className="gap-2 !w-[250px] !bg-[#FFFFFF1A] !border-[1px] !border-[#BCBCBC] !rounded-[30px] mt-2 "
                >
                    <span className="font-machina text-[14px] md:text-[18px] font-[350] ">I don&apos;t have wallet</span>
                    <BsArrowRight size={15} />
                </BasicButton>
            </div>
        </div>
    );
}

export default ConnectWalletModal;
