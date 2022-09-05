import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PlayersService } from './players.service';

import { CreatePlayerDTO } from './dto/create-player.dto';
import { UpdatePlayerDTO } from './dto/update-player.dto';
import { Player } from './player.model';

@Controller('players')
export class PlayersController {
  constructor (private readonly playersService: PlayersService) {}

  @Get()
  findAll (): Player[] {
    return this.playersService.findAll();
  }

  @Get(':player_id')
  findById (@Param('player_id') playerId: string): Player {
    return this.playersService.findById(playerId);
  }

  @Post()
  create (@Body() createPlayerDTO: CreatePlayerDTO): Player {
    return this.playersService.create(createPlayerDTO);
  }

  @Patch(':player_id')
  update (
    @Param('player_id') playerId: string,
    @Body() updatePlayerDTO :UpdatePlayerDTO
  ): Player {
    return this.playersService.update(playerId, updatePlayerDTO);
  }

  @Delete(':player_id')
  delete (@Param('player_id') playerId: string): void {
    return this.playersService.delete(playerId);
  }
}
