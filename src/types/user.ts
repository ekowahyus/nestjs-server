import { Document } from 'mongoose';

interface Address {
    mainAddress: string;
    alternativeAddress: string;
    city: string;
    state: string;
    country: string;
    zip: number;
}

export interface User extends Document {
    username: string;
    readonly password: string;
    seller: boolean;
    address: Address;
    created: Date;
}