import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const POST = async(req: Request) => {
    try{
        const body: any = await req.json()

        
        const product = await prisma.products.create({
            data: {
                productName: body.productName,
                categoryId: body.categoryId,
                price: Number(body.price),
                images: body.images,
                totalCount: Number(body.totalCount),
                userId: body.userId
            }
        });
        

        return NextResponse.json(product)
    }catch(err){
        return NextResponse.json(err)
    }
}