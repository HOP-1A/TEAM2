"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { number, z } from "zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  number: z.coerce
    .number()
    .min(10000000, {
      message: "Phone number must be valid",
    })
    .max(99999999, {
      message: "Phone number must be valid",
    }),
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      number: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const number = Number(values.number);
  };

  const router = useRouter();

  return (
    <div className="flex w-[100vw] h-[90vh] justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 p-4 w-[500px] rounded-md flex flex-col justify-center"
          style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 16px" }}
        >
          <div>Нэвтрэх</div>
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Утасны дугаар</FormLabel>
                <FormControl>
                  <Input placeholder="12345678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Нэвтрэх</Button>
          <div className="flex w-[100%] justify-center">Эсвэл</div>
          <Button onClick={() => router.push("/signup")}>Бүртгүүлэх</Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
