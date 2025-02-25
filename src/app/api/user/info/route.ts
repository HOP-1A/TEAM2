import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const POST = async(req: Request) => {
    try{
        const body = await req.json()

        const user = await prisma.users.findUnique({
            where: {
                id: body.userId
            }
        })
        if(!user) return NextResponse.json({message: 'User not found'})

        return NextResponse.json(user)
    }catch(err){
        return NextResponse.json(err, {status: 500})
    }
}