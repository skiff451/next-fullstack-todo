import express, {Express} from 'express';
import bodyParser from "body-parser"
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();
import {sequelize} from "./src/db/sequelize";
import {registrationRouter} from './src/routes/registration';

const app: Express = express();
const port = process.env.PORT;
const clientHost = process.env.CLIENT_HOST;
const clientPort = process.env.CLIENT_PORT;

app.use(cors(
    {
        origin: `http://${clientHost}:${clientPort}`,
        credentials: true,
        // optionSuccessStatus: 200,
    }
))
app.use(cookieParser())
app.use(bodyParser.json())

app.use('/registration', registrationRouter);
app.listen(port, async () => {
    try {
        console.log("here")
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync();
        console.log("All models were synchronized successfully.");
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    } catch (error) {
        console.error('some problem occurs', error);
    }
});
