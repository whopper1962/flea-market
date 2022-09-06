import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';
import { LoggerMiddleware } from './middleware/logger.middleware'

@Module({
  imports: [ItemsModule, PlayersModule, TeamsModule],
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
