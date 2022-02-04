import 'reflect-metadata';
import express from "express"
import swaggerUi from 'swagger-ui-express';
import swaggerFile from "../swagger.json";
import "../database";
import "../shared/container";
import { router } from '../routes';
import 'dotenv/config';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);
const port = process.env.PORT || 3331;
app.listen(port, () => console.log("Server is running!", port));
