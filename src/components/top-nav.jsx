"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";



const TopNav = () => {

    const pathname = usePathname();
    const router = useRouter();
    const navOptions = [
        {
            text: "About us",
            link: "/about",
        },
        {
            text: "Tokenomics",
            link: "/?scrollto=tokenomics",
        },
        {
            text: "How to",
            link: "/?scrollto=how-to",
        },
        {
            text: "Road Map",
            link: "/?scrollto=roadmap",
        },
        {
            text: "FAQ",
            link: "/?scrollto=faq",
        },
        // {
        //     text: "Airdrop Info",
        //     link: "#",
        // },
        // {
        //     text: "Staking",
        //     link: "#",
        // },
        {
            text: "Whitepaper",
            link: "#",
        },

    ]
    const socials = [
        {
            icon: FaXTwitter,
            link: "https://x.com/Slartofficial?t=7FQxa80zlrtAO8HS1473UQ&s=09",
        },
        {
            icon: FaTelegramPlane,
            link: "https://t.me/SlartOfficial",
        },

    ]
    const [showNav, setShowNav] = useState(false);

    return (
        <div className={`w-full py-[20px] md:py-[30px] px-[20px] md:px-[70px] lg:px-[150px] border-b-[1px] border-[#3E3E3E] font-poppins `}>
            <div className="flex items-center justify-between lg:justify-normal gap-8 bg-[#FFFFFF14] border-[1px] border-[#FFFFFF] rounded-[40px] px-[32px] ">
                <Link href="/">
                    <div className="">
                        <Image
                            width={78}
                            height={22}
                            src={`/images/logo.png`}
                            alt="logo"
                        />
                    </div>
                </Link>
                <button onClick={() => setShowNav(true)} className={` lg:hidden text-white py-[16px]`}>
                    <CiMenuFries size={25} />
                </button>
                <div className="flex-1 hidden lg:flex gap-2 justify-center ">
                    {
                        navOptions.map((m, index) =>
                            <Link href={m.link} key={Math.random() * 23}>
                                <div className={`text-[13px] font-[350] py-[16px] px-2 relative z-10  ${m.link == pathname ? `border-b-2 border-[#8F18E3] bg-[#F2E1FF14] ` : ""} `}>{m.text}</div>
                            </Link>
                        )
                    }
                </div>
                <div className=" hidden lg:flex gap-4 items-center relative z-10">
                    {
                        socials.map((m, index) =>
                            <Link target="_blank" href={m.link} key={Math.random() * 23}>
                                <m.icon className="text-[20px]  " />
                            </Link>
                        )
                    }
                </div>
            </div>

            <div className={`lg:hidden w-[100vw] transition-all duration-500 h-[100vh] bg-black fixed top-0  z-30 flex flex-col items-center px-[20px] py-[30px] gap-[50px] ${showNav ? "right-0" : "-right-[100vw]"}`}>
                <div className="flex justify-between items-center w-full">
                    <Link href="/">
                        <div className="">
                            <Image
                                width={73}
                                height={28}
                                src={`/images/logo.png`}
                                alt="logo"
                            />
                        </div>
                    </Link>
                    <button onClick={() => setShowNav(false)} >
                        <LiaTimesSolid size={20} />
                    </button>
                </div>
                <div className="flex flex-col gap-4 mt-3 items-center">
                    {
                        navOptions.map((m, index) =>
                            <button onClick={() => { setShowNav(false); router.push(m.link) }} key={Math.random() * 23}>
                                <span className={` text-[14px] ${m.link == pathname ? "border-b-2 border-primary" : ""}`}>{m.text}</span>
                            </button>
                        )
                    }
                </div>
                <div className=" flex gap-8 items-center">
                    {
                        socials.map((m, index) =>
                            <Link target="_blank" href={m.link} key={Math.random() * 23}>
                                <div className="w-[40px] h-[40px] rounded-[50%] bg-[#FFFFFF1A] border-[1px] border-[#FFFFFF] flex items-center justify-center text-[20px]">
                                    <m.icon />
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>

        </div>
    );
}

export default TopNav;