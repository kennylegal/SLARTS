import Heading from "@/components/heading";

const RoadMap = () => {

    const roadmaps = [
        {
            title: "Phase 1",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
        },
        {
            title: "Phase 2",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
        },
        {
            title: "Phase 3",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
        },
    ]
    return (
        <div className="flex flex-col gap-8">
            <Heading text="Roadmap" />
            <div className="flex gap-3 overflow-x-auto md:overflow-x-hidden">
                {
                    roadmaps.map((r, index) =>
                        <div key={Math.random() * 33} className="relative min-w-[300px] md:w-auto md:flex-1 flex flex-col gap-6 rounded-[8px] bg-[#101010] border-[1px] border-white p-[20px]">
                            <div className="relative w-[32px] h-[32px] bg-[#FFFFFF]">
                                <div className="absolute w-full h-full bg-secondary left-1 -top-1"></div>
                            </div>
                            <h3 className=" font-machina text-[24px] leading-[24px]">{r.title}</h3>
                            <span className=" whitespace-pre-line text-[13px] font-[350] leading-[16px] font-poppins">
                                {r.desc}
                            </span>
                            <div className=" absolute w-[209px] h-[199px] bg-[#7304C2] top-2 left-0  blur-[200px]">

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default RoadMap;