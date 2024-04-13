import { NextResponse } from "next/server";
import GuildMember from "@/models/GuildMember";

export async function POST(req) {
    const memberInfo = await req.json();
    console.log(memberInfo)

    try {
        const memberData = {
            name: memberInfo.name,
            class: memberInfo.class,
            level: memberInfo.level,
            race: memberInfo.race,
            alignment: memberInfo.alignment,
            armorClass: memberInfo.armorClass,
            hitPoints: memberInfo.hitPoints,
            experiencePoints: memberInfo.experiencePoints,
            speed: memberInfo.speed,
            backstory: memberInfo.backstory,
            proficiencies: {
                armor: memberInfo.proficiencies.armor,
                weapons: memberInfo.proficiencies.weapons,
                tools: memberInfo.proficiencies.tools,
                savingThrows: memberInfo.proficiencies.savingThrows
            },
            abilityScores: {
                strength: {
                    baseNumber: memberInfo.abilityScores.strength.baseNumber,
                    modifier: memberInfo.abilityScores.strength.modifier,
                },
                dexterity: {
                    baseNumber: memberInfo.abilityScores.dexterity.baseNumber,
                    modifier: memberInfo.abilityScores.dexterity.modifier,
                },
                constitution: {
                    baseNumber: memberInfo.abilityScores.constitution.baseNumber,
                    modifier: memberInfo.abilityScores.constitution.modifier,
                },
                intelligence: {
                    baseNumber: memberInfo.abilityScores.intelligence.baseNumber,
                    modifier: memberInfo.abilityScores.intelligence.modifier,
                },
                wisdom: {
                    baseNumber: memberInfo.abilityScores.wisdom.baseNumber,
                    modifier: memberInfo.abilityScores.wisdom.modifier,
                },
                charisma: {
                    baseNumber: memberInfo.abilityScores.charisma.baseNumber,
                    modifier: memberInfo.abilityScores.charisma.modifier,
                },
            }
        }
        
        console.log(memberData);
        const newGuildMember = await GuildMember.create( memberData);
        console.log(newGuildMember)

        return NextResponse.json({message: "Member created"}, { status: 201})
    } catch (error) {
        return NextResponse.json({message: "Error", error}, { status: 500})
    }
}