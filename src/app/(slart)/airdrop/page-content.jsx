import BasicButton from "@/components/buttons/basic-button-component";

const PageContent = () => {

   return (
      <div className="px-[20px] md:px-[50px] pb-[100px] ">
         <div className="flex flex-col md:flex-row gap-10 rounded-[8px] bg-[#FFFFFF1A] border-[1px] border-[#444444] px-[20px] py-[40px] md:p-[30px] w-full md:w-[90%] mx-auto mt-[60px]">
            <div className="md:flex-1 flex flex-col gap-4 relative">
               <span className="text-[20px] md:text-[34px] leading-[24px] md:leading-[44px] font-[800] font-machina">We are all prepared for you at Slart. Get updated on our Airdrop</span>
               <BasicButton
                  className="gap-2 !w-[300px] !md:w-[360px] !bg-secondary !rounded-[30px] mt-4 shadow-md shadow-primary"
               >
                  <span className="font-machina text-[18px] font-[350]">Join Airdrop Now!</span>
               </BasicButton>
               <div className="hidden md:block absolute w-[325px] h-[337px] bg-[#7304C2] -left-2 bottom-8 blur-[210px]"></div>
            </div>
            <div className="md:flex-1 text-[14px] leading-[24px] font-[350] font-poppins">
               <span className=" whitespace-pre-line"> {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</span>
            </div>
         </div>
      </div>
   );
}

export default PageContent;