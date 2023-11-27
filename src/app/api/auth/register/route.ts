import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

import bcrypt from 'bcrypt';


export async function POST(request: Request){
    const data = await request.json();
    console.log(data);    

    // aqui hasheo el password
    const salt = await bcrypt.genSalt(10)
    data.password = await bcrypt.hash(data.password, salt);

    // llamo a prisma y creo el usuario
    const newUser = await prisma.user.create({data:data});
    // asi quito el password de user
    const {password, ...user} = newUser
    
    return NextResponse.json(user, {
        status: 201,
    })
}