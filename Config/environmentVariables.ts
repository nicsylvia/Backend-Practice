import dotenv from "dotenv";

dotenv.config();

export const environmentVariables = {
    PORT: process.env.PORT as string,

    MONGODB_STRING: process.env.DB_URL as string
}