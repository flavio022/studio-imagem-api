import 'reflect-metadata';
import express from "express"
import "./database";
import "./shared/container";
import { router } from './routes';
import 'dotenv/config';
import cors from 'cors';
import * as Sentry from "@sentry/node";
import { handlingErrors } from "./middlewares/handlingErrors";
import swaggerFile from "./swagger.json";
import swaggerUi from 'swagger-ui-express';


const app = express();
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());
app.use(express.json());

app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);
app.use(Sentry.Handlers.errorHandler());

app.use(handlingErrors);

const port = process.env.PORT || 3333;
app.listen(port, () => console.log("Server is running!", port));