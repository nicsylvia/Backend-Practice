import dotenv from "dotenv";

dotenv.config();

export const environmentVariables = {
    PORT: process.env.PORT as string,

    MONGODB_URL: process.env.MONGODB_STRING as string
}