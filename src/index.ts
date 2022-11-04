
import 'reflect-metadata';
import App from './app';
import * as bodyParser from 'body-parser';



(async () => {
    // try {
    //     await createConnection(config);
    // } catch (error) {
    //     console.log('Error while connecting to the database', error);
    //     return error;
    // }
    const app = new App(
        [
            //controllers
        ],
        [
            bodyParser.json(),
            //middleware
        ],
        3000, //port, move to config file
    );
    app.listen();
})();