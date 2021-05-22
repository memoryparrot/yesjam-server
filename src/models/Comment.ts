import mongoose from "mongoose";
import { IComment } from "../interfaces/IComment"

const CommentSchema = new mongoose.Schema({
    division: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    sentence: {
        type: String,
        required: true,
        unique: true
    }
})

export default mongoose.model<IComment & mongoose.Document>("Comment", CommentSchema);