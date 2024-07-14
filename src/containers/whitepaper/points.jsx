const WhitepaperPoints = () => {

    const points = [
        {
            title: "A Fair Launch, Trading Adventure, and the Greatest Airdrop in Crypto History",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
        },
        {
            title: "A Fair Launch, Trading Adventure, and the Greatest Airdrop in Crypto History",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
        },
        {
            title: "A Fair Launch, Trading Adventure, and the Greatest Airdrop in Crypto History",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
        },
        {
            title: "A Fair Launch, Trading Adventure, and the Greatest Airdrop in Crypto History",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
        },
        {
            title: "A Fair Launch, Trading Adventure, and the Greatest Airdrop in Crypto History",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
        },
        {
            title: "A Fair Launch, Trading Adventure, and the Greatest Airdrop in Crypto History",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
        },
        {
            title: "A Fair Launch, Trading Adventure, and the Greatest Airdrop in Crypto History",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
        },

    ]
    return (
        <div className="relative flex flex-col gap-4 rounded-[16px] bg-[#FFFFFF1A] border-[1px] border-[#BCBCBC] p-[20px] md:p-[30px] w-full md:w-[90%] mx-auto">
            {
                points.map((p, index) =>
                    <div key={Math.random() * 78} className="flex flex-col gap-3">
                        <span className="text-[18px] md:text-[20px] font-[800] leading-[22px] font-machina">{p.title}</span>
                        <span className=" whitespace-pre-line text-[14px] leading-[22px] font-[350] text-[#FFFFFFE5] font-poppins">
                            {p.desc}
                        </span>
                        <div className="w-full border-[1px] border-[#757575] my-2 md:my-4"></div>
                    </div>
                )
            }
            <div className=" absolute w-[219px] h-[209px]  bg-[#7304C2] top-[40%] md:top-2 left-0  blur-[200px]"></div>
        </div>
    );
}

export default WhitepaperPoints;