import mongoose, { Schema } from "mongoose";
import { ObjectId } from "mongodb";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const guildContractSchema = new Schema(
    {
        contractStatus: {
            type: String,
            enum: ["Pending", "Approved", "Rejected", "Withdrawn", "In Progress", "Completed"],
            default: "Pending"
        },
        adventureReason: {
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            enum: ["Abanasinia", "Istars", "Northern Ergoth", "Qualinesti", "Solamnia", "Tarsis", "Thorbardin"],
            required: true,
        },
        contractAmount: {
            type: Number,
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        hiredBy: {
            type: String,
            required: true,
        },
        guildMemberHired: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const GuildContract = mongoose.models.GuildContract || mongoose.model("GuildContract", guildContractSchema);

export default GuildContract;