import mongoose from "mongoose";

const listSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        author: { type: String, required: true },
        title: { type: String, default: '' },
        message: { type: String, default: '' },
        isFavorite: { type: Boolean, default: false },
        status: { type: String }
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const list = mongoose.model("List", listSchema)

export { list, listSchema };