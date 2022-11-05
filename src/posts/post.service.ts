import mongoose from "mongoose";
import IPost from "./post.interface";
import PostModel from "./post.model";

class PostsService {
    private postModel = PostModel;
    public async get() : Promise<IPost> {
        const post : IPost = await this.postModel.findOne();
        return post;
    }
}

export default PostsService;