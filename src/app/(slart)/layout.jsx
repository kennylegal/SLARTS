"use client";
import Footer from "@/components/footer";
import TopNav from "@/components/top-nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Web3Modal } from "@/context";
import { Suspense, useEffect } from 'react';
import ErrorBoundary from "@/containers/error-boundary";


const Layout = ({ children }) => {
    useEffect(() => {
        const handlePromiseRejection = (event) => {
            event.preventDefault();
          console.error('Unhandled rejection (promise:', event.promise, ', reason:', event.reason, ').');
          // Optionally display a user-friendly message to the user
        };
    
        window.addEventListener('unhandledrejection', handlePromiseRejection);
    
        return () => {
          window.removeEventListener('unhandledrejection', handlePromiseRejection);
        };
      }, []);

    return (
        <div className="flex flex-col overflow-x-hidden bg-[#000000] text-white relative">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
            />
            <TopNav />
            <Suspense fallback={null}>
                <div className="flex-1">
                    <Web3Modal>
                        {children}
                    </Web3Modal>
                </div>
            </Suspense>
            <Footer />
            <div className="absolute w-[263px] h-[251px] md:w-[435px] md:h-[415px] bg-[#7304C2]  md:right-20  top-2  blur-[200px] md:blur-[300px]"></div>
        </div>
    );
}

export default Layout;
