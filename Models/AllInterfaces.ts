import { Document } from "mongoose";

export interface userData extends Document{
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    role: string
};

export interface landData extends Document{
    image: string,
    price: string,
    location: string,
    views: []
}