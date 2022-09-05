import { Injectable } from '@nestjs/common';
import { Team } from './team.model';

import { CreateTeamDto } from './dto/create-team.dto';

import { v4 as uuid } from 'uuid';

@Injectable()
export class TeamsService {
  private teams:Team[] = [];

  findAll (): Team[] {
    return this.teams;
  }

  create (createTeamDto: CreateTeamDto): Team {
    const team = {
      id: uuid(),
      ...createTeamDto
    };
    this.teams.push(team);
    return team;
  }
}
