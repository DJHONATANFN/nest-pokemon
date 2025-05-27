import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
//import { ConfigurationMongo } from 'configuration-mongo';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get("mongo.mongodb")
      }),
      inject: [ConfigService]
    }),

    // ConfigModule.forRoot({
    //   load: [ConfigurationMongo],
    //   envFilePath: `${process.env.NODE_ENV}.env`,
    //   isGlobal: true
    // }),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => ({
    //     uri: configService.get("mongo.MONGO_URI")
    //   }),
    //   inject: [ConfigService]
    // }),
    PokemonModule,
    CommonModule,
    SeedModule,
  ],
})
export class AppModule { }
