import 'reflect-metadata';
import express from "express"
import "./database";
import "./shared/container";
import { router } from './routes';
import 'dotenv/config';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());
app.use(router);
const port = process.env.PORT || 3331;
app.listen(port, () => console.log("Server is running!", port));
