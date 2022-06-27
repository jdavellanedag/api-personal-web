import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { QueriesModule } from './queries/queries.module';
import { BlogModule } from './blog/blog.module';
import { join } from 'path';

@Module({
  imports: [
    QueriesModule,
    BlogModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('DATABASE_URL'),
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      include: [BlogModule],
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      debug: true,
      playground: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
