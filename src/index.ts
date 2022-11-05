import App from './app';
import * as bodyParser from 'body-parser';
import PostsController from './posts/post.controller';
import { connect } from 'mongoose';
import WordsetController from './wordsets/wordset.controller';




(async () => {
    try {
        await connect("mongodb://localhost:27017/sne-dev");

    } catch (error) {
        console.log('Error while connecting to the database', error);
        return error;
    }
    const app = new App(
        [
            new PostsController(),
            new WordsetController(),
        ],
        [
            bodyParser.json(),
            //middleware
        ],
        3000, //port, move to config file
    );
    app.listen();
})();