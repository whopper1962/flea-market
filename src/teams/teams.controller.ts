import { Body, Controller, Get, Post } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { Team } from './team.model';

@Controller('teams')
export class TeamsController {
  constructor (private readonly teamsService: TeamsService) {}

  @Get()
  findAll (): Team[] {
    return this.teamsService.findAll();
  }

  @Post()
  post (@Body() createTeamDto: CreateTeamDto): Team {
    return this.teamsService.create(createTeamDto);
  }
}
