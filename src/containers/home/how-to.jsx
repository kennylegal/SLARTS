import Heading from "@/components/heading";

const HowTo = () => {

    const steps = [
        {
            title: "Buy and hold",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
        },
        {
            title: "Buy and Stake",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
        },
        {
            title: "Signup on Airdrop",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
        },
    ]

    return (
        <div className="flex flex-col md:flex-row gap-8 md:gap-20">
            <div className="md:flex-1 relative">
                <Heading text="How to Buy" />
                <div className="hidden md:block absolute w-[388px] h-[370px] bg-[#7304C2] left-8 top-20  blur-[300px]">
                </div>
            </div>
            <div className="md:flex-1 md:flex gap-12">
                <div className="hidden md:flex relative h-[470px]  justify-center">
                    <div className="h-full border-l-[2px] border-[#9E9E9E] border-dashed"></div>
                    <div className="absolute flex flex-col justify-between h-full top-0 ">
                        {
                            [1, 2, 3].map((n, index) =>
                                <div key={index} className="flex items-center justify-center rounded-[50%] w-[34px] h-[34px] border-[1px] border-[#A5A5A5] bg-secondary font-machina text-[18px]">{n}</div>
                            )
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-4 md:gap-6 ">
                    {
                        steps.map((r, index) =>
                            <div key={Math.random() * 33} className="relative flex flex-col gap-6 rounded-[8px] bg-[#101010] border-[1px] border-[#BCBCBC] p-[20px] md:p-[30px]">
                                <h3 className=" font-machina text-[24px] leading-[24px]">{r.title}</h3>
                                <span className=" whitespace-pre-line text-[13px] font-[350] leading-[16px] font-poppins">
                                    {r.desc}
                                </span>
                                <div className=" absolute w-[209px] h-[199px] bg-[#7304C2] top-2 right-0  blur-[200px]">

                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
}

export default HowTo;