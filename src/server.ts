import 'reflect-metadata';
import express from "express"
import "./database";
import "./shared/container";
import { router } from './routes';
import 'dotenv/config';
import cors from 'cors';
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";

import { handlingErrors } from "./middlewares/handlingErrors";

const app = express();
Sentry.init({
    dsn: process.env.SENTRY_DSN,
    integrations: [
        new Sentry.Integrations.Http({ tracing: true }),
        new Tracing.Integrations.Express({ app }),
    ],
    tracesSampleRate: 1.0,
});
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());
app.use(express.json());
app.use(router);
app.use(handlingErrors);

const port = process.env.PORT || 3333;
app.listen(port, () => console.log("Server is running!", port));
