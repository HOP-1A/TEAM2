import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const POST = async(req: Request) => {
    try{
        const body: any = await req.json()
        console.log(body)

        const product = await prisma.products.findUnique({
            where: {
                id: body.id
            }
        })

        if(!product) return NextResponse.json("not found")

        return NextResponse.json(product)
    }catch(err){
        return NextResponse.json(err)
    }
}

export const GET = async() => {
    try{
        const categories = await prisma.products.findMany()
        return NextResponse.json(categories)
    }catch(err){
        return NextResponse.json(err, {status: 500})
    }
}