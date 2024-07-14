import {  Poppins} from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";


const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: "--font-poppins",
});

const machina = localFont({
  src: "../fonts/NeueMachina-Regular.otf",
  variable: "--font-machina",
});

export const metadata = {
  title: "Slart",
  description: "Slart The Greatest Airdrop of All Time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${machina.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
