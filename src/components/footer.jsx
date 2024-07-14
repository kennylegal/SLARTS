import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";


const Footer = () => {

    const links = [
        {
            text: "Term of Use",
            link: "#",
        },
        {
            text: "Privacy Policy",
            link: "#",
        },
        {
            text: "Contact Us",
            link: "#",
        },

    ]

    return (
        <div className=" flex flex-col gap-6 font-poppins overflow-hidden ">
            <div className="px-[20px] md:px-[70px] pt-[50px] md:pt-[60px] flex flex-col md:flex-row gap-8">
                <div className="md:basis-[40%]">
                    <Link href="/">
                        <div className="">
                            <Image
                                width={115}
                                height={33}
                                src={`/images/logo.png`}
                                alt="logo"
                            />
                        </div>
                    </Link>
                    <div className=" flex flex-col gap-6  mt-5">
                        {
                            links.map((m, index) =>
                                <Link href={m.link} key={Math.random() * 23}>
                                    <div className={`text-[14px] font-[400] `}>{m.text}</div>
                                </Link>
                            )
                        }
                    </div>
                </div>
                <div className="md:flex-1 relative flex items-end">
                    <div className="hidden md:block">
                        <Image
                            width={573}
                            height={188}
                            src={`/images/watermark.svg`}
                            alt="watermark"
                        />
                    </div>
                    <div className=" md:hidden">
                        <Image
                            width={330}
                            height={108}
                            src={`/images/watermark.svg`}
                            alt="watermark"
                        />
                    </div>
                    <div className="absolute w-[351px] h-[335px] md:w-[415px] md:h-[397px] bg-[#7304C2]  md:right-20  top-0  blur-[300px] md:blur-[400px]">

                    </div>
                </div>
            </div>
            <div className="text-center py-[20px] border-t-2 border-[#272727]">
                <span className="text-[14px] text-[#333333] font-[300]  ">
                    &copy; 2024 Slart. All rights reserved.
                </span>
            </div>
        </div>
    );
}

export default Footer;