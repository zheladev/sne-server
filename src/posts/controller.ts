import * as express from 'express';
import Controller from '../interfaces/controller';

class PostsController implements Controller {
    public path = '/posts';
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
    }

    private getAllPosts = async (request: express.Request, response: express.Response) => {
        response.send("This endpoint returns all posts.");

    }
}

export default PostsController;