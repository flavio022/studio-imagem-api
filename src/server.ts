import 'reflect-metadata';
import express from "express"
import "./database";
import "./shared/container";
import { router } from './routes';
import 'dotenv/config';
import cors from 'cors';
import { handlingErrors } from "./middlewares/handlingErrors";

const app = express();


app.use(express.json());
app.use(cors());

app.use(router);

app.use(handlingErrors);

const port = process.env.PORT || 3333;
app.listen(port, () => console.log("Server is running!", port));
