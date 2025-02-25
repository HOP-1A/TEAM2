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
import { useState } from "react";

const formSchema = z.object({
  phoneNumber: z.coerce.number().min(10000000, {
    message: "Утасны дугаар буруу байна",
  }).max(99999999, {
    message: "Утасны дугаар буруу байна",
  }),
  password: z.string().min(4,{
    message: 'Хамгийн багадаа 4 орон байна.'
  })
});

const Login = () => {
  const [data, setData] = useState('')
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: 0,
      password: ''
    },
  })

  const router = useRouter();
     
    const onSubmit = async(values: z.infer<typeof formSchema>) => {
        const user = await fetch('api/auth', {
          method: 'POST',
          body: JSON.stringify(values)
        }).then(res => res.json())
        .then(res => {
          if (res.message == 'logged in'){ 
            setData(res.info)
            console.log(data)
            localStorage.setItem('userId', res.info.id)
            router.push('/')
          }else{
            alert('Please check your information')
          }
        })
    }

  return (
    <div className="flex w-[100vw] h-[90vh] justify-center items-center">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4 w-[500px] rounded-md flex flex-col justify-center" style={{boxShadow:"rgba(0, 0, 0, 0.05) 0px 0px 16px"}}>
                <div>Нэвтрэх</div>
                  <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Утасны дугаар</FormLabel>
                      <FormControl>
                          <Input placeholder="123456**" {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />
                  <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Нууц үг</FormLabel>
                      <FormControl>
                          <Input type="password" placeholder="****" {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />
                <Button type="submit">Нэвтрэх</Button>
                <div className="flex w-[100%] justify-center">Эсвэл</div>
                <Button onClick={() => router.push('/signup')}>Бүртгүүлэх</Button>
            </form>
        </Form>
    </div>
  );
};

export default Login;
