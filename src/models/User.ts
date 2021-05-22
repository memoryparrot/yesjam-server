import mongoose from 'mongoose';
import { IUser } from "../interfaces/IUser"

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        required: true
    },
})

export default mongoose.model<IUser & mongoose.Document>("User", UserSchema);