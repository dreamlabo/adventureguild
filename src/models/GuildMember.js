import mongoose, { Schema } from "mongoose";
import { ObjectId } from "mongodb";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const guildMemberSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        class: {
            type: String,
            required: true,
            trim: true,
        },
        level: {
            type: Number,
            required: true,
            
        },
        race: {
            type: String,
            enum: ["Dragonborn",
                    "Dwarf",
                    "Elf",
                    "Gnome",
                    "Half Elf",
                    "Halfling",
                    "Half Orc",
                    "Human",
                    "Tiefling"
                ],
            required: true,
        },
        alignment: {
            type: String,
            enum: ["Lawful Good", 
                    "Lawful Neutral", 
                    "Lawful Evil", 
                    "Neutral Good", 
                    "True Neutral",
                    "Neutral Evil", 
                    "Chaotic Good", 
                    "Chaotic Neutral", 
                    "Chaotic Evil" 
                ],
            required: true,
        },
        armorClass: {
            type: Number,
            required: true
        },
        hitPoints: {
            type: Number,
            required: true,
        },
        experiencePoints: {
            type: Number,
            required: true,
        },
        speed: {
            type: Number,
            required: true,
        },
        backstory: {
            type: [String],
            required: true,
        },
        proficiencies: {
            armor: {
                type: [String],
            },
            weapons: {
                type: [String],
            },
            tools: {
                type: [String],
            },
            savingThrows: {
                type: [String],
            },
        },
        abilityScores: {
            strength: {
                baseNumber: {
                    type: Number,
                    required: true,
                },
                modifier: {
                    type: Number,
                    required: true,
                },
            },
            dexterity: {
                baseNumber: {
                    type: Number,
                    required: true,
                },
                modifier: {
                    type: Number,
                    required: true,
                },
            },
            constitution:{
                baseNumber: {
                    type: Number,
                    required: true,
                },
                modifier: {
                    type: Number,
                    required: true,
                },
            },
            intelligence: {
                baseNumber: {
                    type: Number,
                    required: true,
                },
                modifier: {
                    type: Number,
                    required: true,
                },
            },
            wisdom: {
                baseNumber: {
                    type: Number,
                    required: true,
                },
                modifier: {
                    type: Number,
                    required: true,
                },
            },
            charisma: {
                baseNumber: {
                    type: Number,
                    required: true,
                },
                modifier: {
                    type: Number,
                    required: true,
                },
            },
        }
    }
)

const GuildMember = mongoose.models.GuildMember || mongoose.model("GuildMember", guildMemberSchema);

export default GuildMember;