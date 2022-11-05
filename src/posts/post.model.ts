import { model } from "mongoose";
import IPost from "./post.interface";
import postSchema from "./post.schema";


const PostModel = model<IPost>('posts', postSchema);

export default PostModel;