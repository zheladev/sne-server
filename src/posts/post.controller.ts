import { Request, Response, Router } from 'express';
import Controller from '../interfaces/controller';
import PostsService from './post.service';

class PostsController implements Controller {
    public path = '/posts';
    public router = Router();
    private postsService = new PostsService();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
        this.router.get(`${this.path}/:id`, this.getPostById);
    }

    private getAllPosts = async (request: Request, response: Response) => {
        response.send("This endpoint returns all posts.");
    }
    private getPostById = async (request: Request, response: Response) => {
        const post = await this.postsService.get();
        response.send(post);
    }
}

export default PostsController;