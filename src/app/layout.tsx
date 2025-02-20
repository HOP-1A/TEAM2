import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Search } from "lucide-react";
import { Phone } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import { Camera } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="geistSans variable geistMono variable antialiased">
        <div className="fixed top-0 left-0 right-0">
          <div className="bg-black text-white">
            <div className="flex justify-between p-4">
              <div>Хүссэнээ зар, Хайснаа ол</div>
              <div className="flex space-x-4">
                <Phone color="white" />
                <span>7777-8984</span>
                <Facebook color="white" />
                <Instagram color="white" />
                <Twitter color="white" />
                <div>Түгээмэл асуулт, хариулт</div>
                <div>Санал хүсэлт</div>
              </div>
            </div>
          </div>

          <div className="flex p-4 shadow-md space-x-16 justify-center bg-white">
            <img
              className="h-[45px]"
              src="https://zary.mn/27a395c08037dc4652ee51434e509bb1.png"
              alt="Zary Logo"
            />
            <div className="flex items-center">
              <input
                className="border-2 border-black rounded-l-md w-[500px] max-w-[500px] p-2"
                type="text"
                placeholder="Барааны нэр, зарын дугаар, түлхүүр үг, утасны дугаараар хайлт хийх боломжтой."
              />
              <button className="bg-black text-white rounded-r-md w-[120px] h-[45px] flex justify-center items-center p-4 transition-transform hover:bg-gray-800">
                <Search color="white" />
              </button>
            </div>

            <div className="flex p-2 gap-[15px]">
              <button className="shadow-md rounded-3xl bg-[#eeeff7] w-10 h-10 flex justify-center items-center transition-transform transform hover:scale-125 hover:bg-[#d2e4f7]">
                <MessageCircle />
              </button>
              <button className="shadow-md rounded-3xl bg-[#eeeff7] w-10 h-10 flex justify-center items-center transition-transform transform hover:scale-125 hover:bg-[#d2e4f7]">
                <Heart />
              </button>
              <button className="shadow-md rounded-3xl bg-[#eeeff7] w-10 h-10 flex justify-center items-center transition-transform transform hover:scale-125 hover:bg-[#d2e4f7]">
                <ShoppingCart />
              </button>
              <button  className="shadow-md rounded-3xl bg-[#eeeff7] w-10 h-10 flex justify-center items-center transition-transform transform hover:scale-125 hover:bg-[#d2e4f7]">
                <User  />
              </button>
              <button className="shadow-md rounded-3xl bg-[#eeeff7] w-10 h-10 flex justify-center items-center transition-transform transform hover:scale-125 hover:bg-[#d2e4f7]">
                <Camera />
              </button>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
