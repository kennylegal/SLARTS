import Heading from "@/components/heading";
import Image from "next/image";
import { IoBarChart } from "react-icons/io5";
import { BsFillBoxFill } from "react-icons/bs";
import { IoMdWifi } from "react-icons/io";


const Tokenomics = () => {

    const points = [
        {
            title: "Marketing",
            desc: "40%",
            icon: IoBarChart,
        },
        {
            title: "Airdrop",
            desc: "10%",
            icon: IoMdWifi,
        },
        {
            title: "CEX Liquidity",
            desc: "26%",
            icon: BsFillBoxFill,
        }, {
            title: "DEX liquidity",
            desc: "24%",
            icon: BsFillBoxFill,
        },
    ]
    return (
        <div className="flex flex-col gap-8">
            <Heading text="Tokenomics" />
            <div className="flex flex-col md:flex-row-reverse gap-4">
                <div className="md:flex-1 rounded-[8px] bg-[#101010] border-[1px] border-[#BCBCBC] px-[20px] py-[40px] flex flex-col gap-6">
                    <div className="rounded-[8px] bg-secondary h-[115px] md:h-[200px] flex items-center justify-center">
                        <div className="hidden md:block">
                            <Image
                                width={226}
                                height={84}
                                src={`/images/slart.svg`}
                                alt="slart"
                            />
                        </div>
                        <div className="md:hidden">
                            <Image
                                width={129}
                                height={47}
                                src={`/images/slart.svg`}
                                alt="slart"
                            />
                        </div>
                    </div>
                    <h3 className=" font-machina text-[28px] leading-[32px]">Token Information</h3>
                    <span className=" whitespace-pre-line text-[14px] font-[350] leading-[22px] font-poppins">
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "}
                    </span>
                </div>
                <div className="md:flex-1 rounded-[8px] bg-[#101010] border-[1px] border-[#BCBCBC] px-[20px] py-[30px] flex flex-col gap-4">
                    <h3 className=" font-machina text-[36px] md:text-[42px] leading-[40px] md:leading-[46px]">1.56B</h3>
                    <span className="text-[14px] md:text-[16px] font-[350] leading-[16px] font-poppins">
                        We have had great supply  distribution over the last one year
                    </span>
                    <div className="flex flex-col gap-6 mt-4">
                        {
                            points.map((p, index) =>
                                <div key={Math.random() * 8} className="flex items-center gap-8 pl-[20px] py-[15px] md:pl-[30px] md:py-[20px] rounded-[4px] bg-[#1D2124]">
                                    <p.icon color="#8908E6" size={30} />
                                    <div className="flex flex-col flex-1">
                                        <span className="text-[16px] text-[#FFFFFFE5] font-[350] font-poppins">{p.title}</span>
                                        <span className="text-[24px] font-machina">{p.desc}</span>
                                    </div>
                                    <div className={`${index % 2 == 0 ? " rotate-[-10deg]" : "rotate-[-189deg]"}`}>
                                        <div className="hidden md:block">
                                            <Image
                                                width={227}
                                                height={123}
                                                src={`/images/slash.svg`}
                                                alt="slash"
                                            />
                                        </div>
                                        <div className="md:hidden">
                                            <Image
                                                width={172}
                                                height={93}
                                                src={`/images/slash.svg`}
                                                alt="slash"
                                            />
                                        </div>

                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tokenomics;