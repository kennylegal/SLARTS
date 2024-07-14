import HeroSection from "@/containers/staking/hero-section";
import Participate from "@/containers/staking/participate";
import Performance from "@/containers/staking/performance";


const PageContent = () => {


   return (
      <div className="px-[20px] md:px-[50px] pb-[100px] flex flex-col gap-[100px]">
         <HeroSection/>
         <Performance/>
         <Participate/>
      </div>
   );
}

export default PageContent;