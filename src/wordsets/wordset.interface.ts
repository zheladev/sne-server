import { ObjectId } from "mongoose";

interface IWordset {
    words: String;
    utimestamp: number;
    posts: Array<ObjectId>;
}

export default IWordset;