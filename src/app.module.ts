import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';
import { LoggerMiddleware } from './middleware/logger.middleware'
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    ItemsModule,
    PlayersModule,
    TeamsModule,
    UsersModule,
    // TypeOrmModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure (consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({
      path: '/',
      method: RequestMethod.GET
    });
  }
}
