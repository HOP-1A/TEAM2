import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const POST = async(req: Request) => {
    try{
        const body: any = await req.json()

        const product = await prisma.users.findUnique({
            where: {
                id: body.userId
            },
            include: {
                products: true
            }
        })

        if(!product) return NextResponse.json("not found")

        return NextResponse.json(product)
    }catch(err){
        return NextResponse.json(err)
    }
}