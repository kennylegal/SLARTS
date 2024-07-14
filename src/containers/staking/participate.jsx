import Heading from "@/components/heading";

const Participate = () => {
    const steps = [
        {
            id: 1,
            title: "Buy Slart",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
        },
        {
            id: 2,
            title: "Stake Slart",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
        },
        {
            id: 3,
            title: "Create Account",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
        },
        {
            id: 4,
            title: "Earn Airdrop Point",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
        },
        {
            id: 5,
            title: "Receive Airdrop ",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
        },
    ];

    return (
        <div className="flex flex-col gap-8">
            <Heading text="How to Participate" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-3">
                {
                    steps.slice(0, 3).map((r, index) => (
                        <div key={index} className="relative min-w-[300px] flex flex-col gap-6 rounded-[8px] bg-[#101010] border-[1px] border-white p-[20px]">
                            <div className="border-[1px] border-white w-[32px] h-[32px] bg-[#6A04B3] rounded-[50%] flex items-center justify-center text-[16px] font-machina">
                                {r.id}
                            </div>
                            <h3 className="font-machina text-[24px] leading-[24px]">{r.title}</h3>
                            <span className="whitespace-pre-line text-[13px] font-[350] leading-[16px] font-poppins">
                                {r.desc}
                            </span>
                            <div className="absolute w-[209px] h-[199px] bg-[#7304C2] top-2 left-0 blur-[200px]"></div>
                        </div>
                    ))
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-3">
                {
                    steps.slice(3).map((r, index) => (
                        <div key={index + 3} className="relative min-w-[300px] flex flex-col gap-6 rounded-[8px] bg-[#101010] border-[1px] border-white p-[20px]">
                            <div className="border-[1px] border-white w-[32px] h-[32px] bg-[#6A04B3] rounded-[50%] flex items-center justify-center text-[16px] font-machina">
                                {r.id}
                            </div>
                            <h3 className="font-machina text-[24px] leading-[24px]">{r.title}</h3>
                            <span className="whitespace-pre-line text-[13px] font-[350] leading-[16px] font-poppins">
                                {r.desc}
                            </span>
                            <div className="absolute w-[209px] h-[199px] bg-[#7304C2] top-2 left-0 blur-[200px]"></div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Participate;
