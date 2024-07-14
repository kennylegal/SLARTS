"use client";
import AboutUs from "@/containers/home/about-us";
import Faq from "@/containers/home/faq";
import HeroSection from "@/containers/home/hero-section";
import HowTo from "@/containers/home/how-to";
import RoadMap from "@/containers/home/roadmap";
import Tokenomics from "@/containers/home/tokenomics";
import { smoothScrollToRef } from "@/utils/scrollTo";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";


const PageContent = () => {

   const searchParams = useSearchParams();
   const aboutRef = useRef();
   const tokenomicsRef = useRef();
   const howToRef = useRef();
   const roadmapRef = useRef();
   const faqRef = useRef();

   useEffect(() => {
      if (searchParams.get("scrollto") === "about") {
         smoothScrollToRef(aboutRef);
      }
      else if (searchParams.get("scrollto") === "tokenomics") {
         smoothScrollToRef(tokenomicsRef);
      }
      else if (searchParams.get("scrollto") === "roadmap") {
         smoothScrollToRef(roadmapRef);
      }
      else if (searchParams.get("scrollto") === "how-to") {
         smoothScrollToRef(howToRef);
      } else if (searchParams.get("scrollto") === "faq") {
         smoothScrollToRef(faqRef);
      }
   }, [searchParams]);

   return (
         <div className="px-[20px] md:px-[50px] pb-[100px] flex flex-col gap-[100px]">
            <HeroSection />
            {/* <div ref={aboutRef}>
            <AboutUs />
         </div> */}
            <div ref={tokenomicsRef}>
               <Tokenomics />
            </div>
            <div ref={roadmapRef}>
               <RoadMap />
            </div>
            <div ref={howToRef}>
               <HowTo />
            </div>
            <div ref={faqRef}>
               <Faq />
            </div>
         </div>
   );
}

export default PageContent;