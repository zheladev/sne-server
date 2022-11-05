import { Schema } from "mongoose";
import IPost from "./post.interface";

const postSchema = new Schema<IPost>({
    title: {type: String, required: true},
    poster: {type: String, required: true},
    contents: {type: String, required: true},
    wordset: {type: Schema.Types.ObjectId, ref: 'wordsets'}
});

export default postSchema;