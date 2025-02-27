/* eslint-disable @next/next/no-img-element */
"use client";

import { Search } from "lucide-react";
import { Phone } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import { Camera } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
        <Link href={"/"}>
          <img
            className="h-[45px]"
            src="https://zary.mn/27a395c08037dc4652ee51434e509bb1.png"
            alt="Zary Logo"
          />
        </Link>

        <div className="flex items-center">
          <div className="flex items-center border-2 border-black rounded-md w-[650px]">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger>
                <button
                  className="flex items-center gap-2 bg-[#eff3f6] px-4 py-2 text-sm rounded-sm h-[43px]"
                  onClick={() => setIsOpen(true)}
                >
                  Бүх ангилал
                  <svg
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M151.5 347.8 3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z"></path>
                  </svg>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you&lsquo;re
                    done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="name" className="text-right">
                      Name
                    </label>
                    <input
                      id="name"
                      defaultValue="Pedro Duarte"
                      className="col-span-3 border p-2 rounded"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="username" className="text-right">
                      Username
                    </label>
                    <input
                      id="username"
                      defaultValue="@peduarte"
                      className="col-span-3 border p-2 rounded"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button>Save</button>
                </div>
              </DialogContent>
            </Dialog>
            <input
              className="flex-1 p-2 outline-none"
              type="text"
              placeholder="Барааны нэр, зарын дугаар, түлхүүр үг, утасны дугаараар хайлт хийх боломжтой."
            />

            <button className="bg-black text-white rounded-r-sm w-[120px] h-[43px] flex justify-center items-center p-4 transition-transform hover:bg-gray-800">
              <Search color="white" />
            </button>
          </div>
        </div>

        <div className="flex p-2 gap-[15px]">
          <div className="relative flex flex-col items-center group">
            <button className="shadow-md rounded-3xl bg-[#eeeff7] w-10 h-10 flex justify-center items-center transition-transform transform hover:scale-125 hover:bg-[#d2e4f7]">
              <ShoppingCart />
            </button>
            <span className="absolute bottom-[-2rem] text-xs bg-gray-800 text-white px-2 py-1 rounded-md opacity-0 transition-opacity group-hover:opacity-100 font-semibold">
              Сагс
            </span>
          </div>

          <div className="relative flex flex-col items-center group">
            <button className="shadow-md rounded-3xl bg-[#eeeff7] w-10 h-10 flex justify-center items-center transition-transform transform hover:scale-125 hover:bg-[#d2e4f7]">
              <User />
            </button>
            <span className="absolute bottom-[-2rem] text-xs bg-gray-800 text-white px-2 py-1 rounded-md opacity-0 transition-opacity group-hover:opacity-100 font-semibold">
              Нэвтрэх
            </span>
          </div>

          <div className="relative flex flex-col items-center group">
            <button className="shadow-md rounded-3xl bg-[#eeeff7] w-10 h-10 flex justify-center items-center transition-transform transform hover:scale-125 hover:bg-[#d2e4f7]">
              <Camera />
            </button>
            <span className="absolute bottom-[-3rem] text-xs bg-gray-800 text-white px-2 py-1 rounded-md opacity-0 transition-opacity group-hover:opacity-100 font-semibold">
              Бүтээгдэхүүн нэмэх
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
