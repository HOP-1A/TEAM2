import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const POST = async(req: Request) => {
    try{
        const body: any = await req.json()
        console.log(body)

        const categoryItems = await prisma.category.findUnique({
            where: {
                categoryName: body.categoryName
            },
            include: {
                products:true
            }
        })

        if(!categoryItems) return NextResponse.json("not found")

        return NextResponse.json(categoryItems)
    }catch(err){
        return NextResponse.json(err)
    }
}

export const GET = async() => {
    try{
        const categories = await prisma.category.findMany()
        return NextResponse.json(categories)
    }catch(err){
        return NextResponse.json(err, {status: 500})
    }
}