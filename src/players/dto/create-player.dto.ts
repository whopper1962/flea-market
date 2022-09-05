import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreatePlayerDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @Min(1)
  @Max(99)
  @Type(() => Number)
  number: number;

  @IsNotEmpty()
  @IsString()
  team: string;

  @IsNotEmpty()
  @IsString()
  position: string;
}
