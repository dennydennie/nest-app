import { IsDate, IsDateString, IsNumber, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  name: string;
  @IsString()
  surname: string;
  @IsNumber()
  age: number;
  @IsString()
  email: string;
  @IsNumber()
  created: number;
}
