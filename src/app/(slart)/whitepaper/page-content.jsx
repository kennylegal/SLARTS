import HeroSection from "@/containers/whitepaper/hero-section";
import WhitepaperPoints from "@/containers/whitepaper/points";


const PageContent = () => {
   return (
      <div className="px-[20px] md:px-[50px] pb-[100px] flex flex-col gap-[60px] md:gap-[100px]">
         <HeroSection />
         <WhitepaperPoints/>
      </div>
   );
}

export default PageContent;