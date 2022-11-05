import { Schema } from "mongoose";
import IWordset from "./wordset.interface";

const wordsetSchema = new Schema<IWordset>({
    utimestamp: {type: Number, required: true},
    posts: [{type: Schema.Types.ObjectId, required: false}],
    words: {type: String, required: true},
})

export default wordsetSchema;