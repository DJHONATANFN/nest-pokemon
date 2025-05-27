import { registerAs } from "@nestjs/config";

export const ConfigurationMongo=registerAs("mongo",()=>({
    MONGO_URI: process.env.MONGO_URI
}));

// "start:dev": "cross-env NODE_ENV=development nest start --watch",