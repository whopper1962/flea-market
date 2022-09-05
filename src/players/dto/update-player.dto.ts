// import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePlayerDTO {
  @IsNotEmpty()
  @IsString()
  team: string;
}
