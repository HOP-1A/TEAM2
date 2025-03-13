"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Page = () => {
  const categories = [
    "Эрэгтэй",
    "Эмэгтэй",
    "Гоо сайхан",
    "Гоёл чимэглэл",
    "Утас",
    "Технологи",
    "Цахилгаан бараа",
    "Тавилга",
    "Гэр ахуй & Чимэглэл",
    "Хүүхдийн хувцас & Хэрэгсэл",
    "Эрүүл мэнд & Витамин",
  ];

  const conditions = ["Шинэ", "Шинэвтэр", "Хуучин"];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");
  const [upld, setUpld] = useState<string[]>([]);

  const form = useForm({
    defaultValues: {
      productName: "",
      price: "",
      condition: "",
      productNumber: "",
    },
  });

  const onSubmit = (values: any) => {
    const formData = { ...values, condition: selectedCondition };
    console.log("Submitted Data:", formData);
  };

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const uploadPromises = Array.from(files).map(async (image) => {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "testerhme");
      formData.append("cloud_name", "dfnw2fgzz");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dfnw2fgzz/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) throw new Error("Failed to upload image");

        const result = await response.json();
        return result.secure_url;
      } catch (error) {
        console.error("Image upload error:", error);
        return null;
      }
    });

    const uploaded = await Promise.all(uploadPromises);
    setUpld(uploaded.filter((url) => url !== null) as string[]);
  };

  return (
    <div className="mt-48 gap-6 w-full p-6 flex justify-center">
      <div className="p-6 w-[450px] shadow-lg bg-white rounded-xl border">
        <h1 className="text-xl font-bold mb-4">Үндсэн ангилал</h1>
        <div className="flex flex-col gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`p-2 bg-gray-100 rounded-lg shadow flex items-center justify-between transition-all duration-300 hover:bg-gray-200 hover:scale-105 ${
                selectedCategory === category ? "text-black font-bold" : ""
              }`}
            >
              <span>{category}</span>
              <ArrowRight className="w-6 h-6 text-gray-800 transition-colors duration-300 hover:text-blue-600" />
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-6">
        <div className="p-6 w-[480px] shadow-lg bg-white rounded-xl border">
          <h1 className="text-xl font-bold mb-4">Барааны мэдээлэл</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="productName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-base">
                      Барааны нэр
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Барааны нэр оруулах" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col gap-2">
                <div className="font-semibold">Төлөв сонгох</div>
                <div className="flex gap-4 justify-center">
                  {conditions.map((condition) => (
                    <button
                      key={condition}
                      type="button"
                      onClick={() => setSelectedCondition(condition)}
                      className={`p-2 w-[140px] rounded-md shadow transition-all ${
                        selectedCondition === condition
                          ? "bg-black text-white font-bold"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {condition}
                    </button>
                  ))}
                </div>
              </div>

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Үнэ</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="₮"
                        {...field}
                        className="no-spin"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <div className="font-semibold mb-2">Нэмэлт мэдээлэл</div>
                <Input
                  type="text"
                  className="no-spin"
                  placeholder="Барааны дэлгэрэнгүй мэдээлэл оруулна уу"
                />
              </div>

              <FormField
                control={form.control}
                name="productNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Үлдэгдэл</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        className="no-spin w-[130px]"
                        placeholder="Тоо ширхэг"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>

        <div className="p-6 w-[450px] shadow-lg bg-white rounded-xl border">
          <h1 className="text-xl font-bold mb-4">Зураг оруулах</h1>
          <Input type="file" multiple onChange={handleImageUpload} />
          <div className="mt-4 flex flex-wrap gap-2">
            {upld.map((img, index) => (
              <img
                key={index}
                src={img}
                className="w-[420px] h-[350px] rounded-lg shadow-lg object-cover"
                alt={`Uploaded ${index + 1}`}
              />
            ))}
          </div>
          <Button
            type="submit"
            className="w-full bg-black transition-transform hover:bg-gray-800 text-white mt-5"
          >
            Илгээх
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
