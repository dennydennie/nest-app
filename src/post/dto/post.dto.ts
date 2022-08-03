import { IsNumber, IsString } from 'class-validator';

export class PostDto {
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsNumber()
  created: number;
  @IsNumber()
  updated: number;
}
