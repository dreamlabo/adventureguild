import { NextResponse } from "next/server";
import GuildContract from "@/models/GuildContract";

import { ObjectId } from "mongodb";

export async function POST(req) {
    const contractData = await req.json();
    console.log(contractData)
   
    try {
        // const contractData = {
        //     adventureReason:  "Retrieve the Dragonlance",
        //     location: "Abanasinia",
        //     contractAmount: 20,
        //     startDate: new Date('2024-01-17'),
        //     endDate: new Date('2024-01-19'),
        //     hiredBy: new ObjectId('660ddd932620fa1e96efdeb9')

        // }

        const data = {
            adventureReason: contractData.adventureReason,
            location: contractData.location,
            contractAmount: contractData.contractAmount,
            startDate: new Date(contractData.startDate),
            endDate: new Date(contractData.endDate),
            guildMemberHired: contractData.guildMemberHired,
            hiredBy: contractData.hiredBy,
        }


        const newGuildContract = await GuildContract.create(contractData);
        console.log(newGuildContract)

        await findOne

        return NextResponse.json({message: "Contract created"}, { status: 201})
        
    } catch (error) {
        console.log("failed to create contract", error)
        return NextResponse.json({message: "Error", error}, { status: 500})
    }
}