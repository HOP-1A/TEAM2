"use client";
import { useState } from "react";
import { Plus, Minus, CircleChevronDown, CircleX } from "lucide-react";

const Page = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 5) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="flex justify-center items-center mt-20 sm:mt-40 px-4">
      <div className="flex flex-col md:flex-row bg-white p-4 md:p-6 rounded-xl shadow-md max-w-5xl w-full">
        <img
          className="w-full md:w-[400px] lg:w-[500px] rounded-lg object-cover"
          src="https://cdnp.cody.mn/spree/images/2820841/large/Messenger_creation_0644E1B2-25A1-4470-AD59-F6CA9D43F520.jpeg?1737703591"
          alt="Product"
        />

        <div className="mt-6 md:mt-0 md:ml-7 flex flex-col w-full">
          <div className="flex justify-between items-center">
            <div className="inline-flex items-center bg-[#fde4ea] text-[#ff3467] px-3 py-1 rounded-lg">
              <span className="text-sm sm:text-base font-medium">Шинэ</span>
            </div>
            <div className="text-sm sm:text-base">
              Зарын дугаар: <strong>1688089</strong>
            </div>
          </div>

          <div className="text-xl sm:text-2xl md:text-3xl font-semibold mt-3">
            Идээ, ууцны хос цар түмэн өлзий хээтэй алтлаг
          </div>

          <div className="mt-3 mb-3">
            <div className="text-lg sm:text-2xl font-semibold">220,000 ₮</div>
            <div className="text-[#888a99] text-sm sm:text-base">
              Боломжит үлдэгдэл: 5
            </div>
          </div>

          <div className="mt-3">
            <div className="text-sm sm:text-base font-medium">Тоо ширхэг</div>
            <div className="flex items-center gap-4 mt-2">
              <button
                className="bg-[#eeeff2] rounded-md p-2 hover:bg-[#dce0e5] transition"
                onClick={decrement}
              >
                <Minus className="text-[#888a99]" size={20} />
              </button>
              <span className="text-lg sm:text-xl font-semibold">
                {quantity}
              </span>
              <button
                className="bg-[#eeeff2] rounded-md p-2 hover:bg-[#dce0e5] transition"
                onClick={increment}
              >
                <Plus className="text-[#888a99]" size={20} />
              </button>
            </div>
            <div className="text-[#888a99] text-xs sm:text-sm mt-1">
              Худалдан авах тоо хэмжээгээ оруулна уу.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button className="bg-[#5b6bf6] text-white font-semibold w-full sm:w-40 h-10 rounded-lg hover:bg-[#4a5cf4] transition">
              Сагслах
            </button>
            <button className="bg-[#ff3467] text-white font-semibold w-full sm:w-40 h-10 rounded-lg hover:bg-[#e02a56] transition">
              Худалдан авах
            </button>
          </div>
          <div>
            <div className="font-semibold mt-2">Хүргэлттэй</div>
            <div className="flex gap-3">
              <div className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow-md transition duration-200">
                <CircleChevronDown className="text-gray-700 w-6 h-6" />
              </div>
              <div className="bg-red-600 hover:bg-red-700 rounded-full p-2 shadow-md transition duration-200">
                <CircleX className="text-white w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
