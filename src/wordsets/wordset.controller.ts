import { Request, Response, Router } from 'express';
import Controller from '../interfaces/controller';


class WordsetController implements Controller {
    public path = "/wordsets";
    public router = Router();
    private wordsetsService;

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, this.getCurrentWordset);
        this.router.get(`${this.path}/:id`, this.getWordsetById);
    }

    private getCurrentWordset = async (request: Request, response: Response) => {
        response.send("This endpoint returns the current wordset.");
    }
    private getWordsetById = async (request: Request, response: Response) => {
        const wordset = await this.wordsetsService.get();
        response.send(wordset);
    }
}

export default WordsetController;