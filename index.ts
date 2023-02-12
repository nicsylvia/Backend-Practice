import express, { Application } from "express";

import dotenv from "dotenv";

import { environmentVariables } from "./Config/environmentVariables";

dotenv.config();

const port = environmentVariables.PORT;

const app: Application = express();