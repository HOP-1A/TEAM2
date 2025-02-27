/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

export const CardSmall = () => {
  return (
    <>
      <Card className="w-[175px] h-[278px] hover:shadow-xl duration-100">
        <img
          className="w-[175px] h-[175px] object-contain "
          src="https://cdnp.cody.mn/spree/images/2854987/product/IMG_5555.jpeg"
          alt=""
        />
        <hr />
        <div className="p-2">
          <div className="flex justify-between">
            <p className="text-xs text-gray-500 ">1 өдрийн өмнө</p>
            <Heart className="w-5 h-5" />
          </div>
          <div className="flex-col space-y-6 h-[66px]">
            <p className="text-[14px] text-gray-600 font-semibold">Дээл</p>
            <p className="text-[16px] font-semibold">130,000 ₮</p>
          </div>
        </div>
      </Card>
    </>
  );
};
