"use client";
import React, { useState, useEffect } from 'react';
import BasicButton from "@/components/buttons/basic-button-component";
import { useRouter } from "next/navigation";

const HeroSection = () => {
    const router = useRouter();



    return (
        <div className="w-full h-auto">
            <div className="md:w-[80%] lg:w-[75%] mx-auto flex flex-col items-center gap-6 mt-10 md:mt-16">
                <h3 className="text-[38px] leading-[44px] md:text-[62px] md:leading-[70px] font-machina text-center">
                    Stake Slart
                </h3>
                <span className="text-[14px] leading-[20px] md:text-[20px] font-[350] md:leading-[30px] font-poppins text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </span>
                <BasicButton
                    className="gap-2 !w-[260px] !bg-[#FFFFFF1A] !border-[1px] !border-[#FFFFFF] !rounded-[30px] mt-2"
                >
                    <span className="font-machina text-[18px] font-[350]">Buy and stake</span>
                </BasicButton>
                <div className="mt-6">
                    {/* <StakeSlartForm bnbRate={bnbRate} usdtRate={usdtRate} walletAddress={walletAddress} /> */}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
