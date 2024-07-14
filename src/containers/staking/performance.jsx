import Heading from "@/components/heading";

const Performance = () => {

    const points = [
        {
            title: "Total Staked",
            amount: 123000.089
            
        },
        {
            title: "Total Staked",
            amount: 123000.089
            
        },
        {
            title: "Total Staked",
            amount: 123000.089
            
        },
    ]
    return (
        <div className="flex flex-col gap-8">
            <Heading text="Performance" />
            <div className="flex flex-col md:flex-row gap-3 ">
                {
                    points.map((r, index) =>
                        <div key={Math.random() * 33} className="relative min-w-[300px] md:w-auto md:flex-1 flex flex-col gap-2 rounded-[8px] bg-[#101010] border-[1px] border-white p-[20px]">
                            <div className="relative w-[32px] h-[32px] bg-[#FFFFFF]">
                                <div className="absolute w-full h-full bg-secondary left-1 -top-1"></div>
                            </div>
                            <span className="mt-4 whitespace-pre-line text-[13px] font-[350] leading-[16px] font-poppins">
                                {r.title}
                            </span>
                            <h3 className=" font-machina text-[24px] leading-[24px]">{r.amount?.toLocaleString()}</h3>
                            <div className=" absolute w-[209px] h-[199px] bg-[#7304C2] top-2 left-0  blur-[200px]">

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Performance;