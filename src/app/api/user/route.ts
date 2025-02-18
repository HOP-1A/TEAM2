import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const  POST = async(req: Request) => {
    try{
        const body = await req.json()

        const user = await prisma.users.create({
            data: {
                email: body.email,
                username: body.username,
                phoneNumber: body.phoneNumber,
                password: body.password
            }
        })

        return NextResponse.json(user)
    }catch(err){
        return NextResponse.json({error: 'Error creating user'}, {status: 500})
    }
}

export const PUT = async(req: Request) => {
    try{
        const body = await req.json()

        const updateUser = await prisma.users.update({
            where: {
                email: body?.email
            },
            data: {
                username: body.username
            }
        })

        return NextResponse.json(updateUser)
    }catch(err){
        return NextResponse.json({error: 'Error updating user'}, {status: 500})
    }
}