import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";


export async function POST(request: Request){
    const data = await request.json();
    console.log(data);    

    // llamo a prisma y creo el usuario
    const newUser = await prisma.user.create({data:data});
    return NextResponse.json(newUser, {
        status: 201
    })
}