import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
// import {} from 'class-transformer';

export class CreateTeamDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  state: string;
}