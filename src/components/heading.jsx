import Image from "next/image";

const Heading = ({ text }) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <span className=" text-center text-[36px] leading-[40px] md:text-[56px] md:leading-[62px] font-[350] font-machina">{text}</span>
            <div className="hidden md:block">
                <Image
                    width={230}
                    height={18}
                    src={`/images/strike.svg`}
                    alt="strike"
                />
            </div>
            <div className="md:hidden">
                <Image
                    width={160}
                    height={14}
                    src={`/images/strike.svg`}
                    alt="strike"
                />
            </div>
        </div>
    );
}

export default Heading;