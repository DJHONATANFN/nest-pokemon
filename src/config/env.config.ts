
//  export const EnvConfiguration = () => ({
//      environment: process.env.NODE_ENV || 'dev',
//      mongodb: process.env.MONGODB,
//      port: process.env.PORT || 3002,
//      defaultLimit: process.env.DEFAULT_LIMIT || 7, 
//  });

import { registerAs } from "@nestjs/config";

// export const EnvConfiguration=registerAs("mongo",()=>({
//     environment: process.env.NODE_ENV || 'dev',
//     mongodb: process.env.MONGODB,
//     port: process.env.PORT || 3002,
//     defaultLimit: process.env.DEFAULT_LIMIT || 7, 
// }));

export const EnvConfiguration = registerAs('mongo', () => ({
    environment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3002,
    defaultLimit: process.env.DEFAULT_LIMIT || 7, 
}));