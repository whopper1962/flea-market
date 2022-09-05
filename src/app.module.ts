import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';

@Module({
  imports: [ItemsModule, PlayersModule, TeamsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
