import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from 'bcrypt';

export async function POST(req) {
    try {
        const body = await req.json();
        const userData = body.formData
        console.log("Body: ", userData)

        if(!userData?.username || !userData?.email || !userData?.password ) {
            return NextResponse.json({message: "All fields are required"}, { status: 400})
        }

        const userExists = await User.findOne({email: userData.email.toLowerCase() })
                            .lean()
                            .exec();

        if(userExists) {
            return NextResponse.json({message: "User Exists"}, {status: 409})
        }

        const hashedPassword = await bcrypt.hash(userData.password, 11);
        userData.username = userData.username;
        userData.email = userData.email.toLowerCase();
        userData.password = hashedPassword;
        userData.roles = ["user"]
        await User.create(userData);

        return NextResponse.json({message: "User created"}, { status: 201})
    
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Error", error}, { status: 500})
    }
}