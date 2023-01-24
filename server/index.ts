import express, {Express} from 'express';
import bodyParser from "body-parser"
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();
import {sequelize} from "./src/db/sequelize";
import authRouter from './src/routes/auth';
import todoRouter from './src/routes/todos';
import {authMiddleware} from "./src/services/auth";

const app: Express = express();
const port = process.env.PORT;
const clientHost = process.env.CLIENT_HOST;
const clientPort = process.env.CLIENT_PORT;

app.use(cors(
    {
        origin: `http://${clientHost}:${clientPort}`,
        credentials: true,
        // optionSuccessStatus: 200,
        // allowedHeaders: ["Authorization", "*"]
    }
))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(authMiddleware);

app.use('/auth', authRouter);
app.use('/todos', todoRouter);
app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync();
        console.log("All models were synchronized successfully.");
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    } catch (error) {
        console.error('some problem occurs', error);
    }
});
