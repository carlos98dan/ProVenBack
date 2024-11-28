import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  secondName?: string;

  @IsNotEmpty()
  @IsString()
  firstLastName: string;

  @IsOptional()
  @IsString()
  secondLastName?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  phone: string;

  @IsNotEmpty()
  @IsString()
  address: string;
}
