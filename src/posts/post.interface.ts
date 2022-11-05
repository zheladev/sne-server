import { ObjectId } from "mongoose";

interface IPost {
    title: string;
    poster: string;
    contents: string;
    wordset: ObjectId;
}

export default IPost;