import { Injectable, NotFoundException } from '@nestjs/common';
import { Player } from './player.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PlayersService {
  private players: Player[] = [];

  findAll (): Player[] {
    if (this.players.length === 0) {
      throw new NotFoundException();
    }
    return this.players;
  }

  create (createItemDto): Player {
    const player = {
      id: uuid(),
      ...createItemDto
    };
    this.players.push(player);
    return player;
  }

  findById (playerId): Player {
    const foundPlayer = this.players.find((player) => {
      return player.id === playerId;
    });
    if (!foundPlayer) throw new NotFoundException();
    return foundPlayer;
  }

  update (playerId, updatePlayerDTO): Player {
    const player = this.findById(playerId);
    player.team = updatePlayerDTO.team;
    return player;
  }

  delete (playerId): void {
    const foundPlayer = this.players.find((player) => {
      player.id === playerId;
    });
    if (!foundPlayer) throw new NotFoundException();
    this.players.splice(this.players.indexOf(foundPlayer), 1);
  }
}
