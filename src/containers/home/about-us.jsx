import Heading from "@/components/heading";

const AboutUs = () => {
    return (
        <div className="flex flex-col gap-8">
            <Heading text="About Us" />
            <div className="relative p-[30px] md:p-[50px] rounded-[8px] bg-[#FFFFFF0A] border-[1px] border-white flex flex-col gap-4 items-center justify-center font-poppins">
                <span className=" text-center text-[14px] font-[350] leading-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </span>
                <span className=" text-center text-[14px] font-[350] leading-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </span>
                <span className=" text-center text-[14px] font-[350] leading-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </span>
                <div className=" absolute w-[232px] h-[221px] bg-[#7304C2] top-2  blur-[200px]">

                </div>
            </div>
        </div>
    );
}

export default AboutUs;