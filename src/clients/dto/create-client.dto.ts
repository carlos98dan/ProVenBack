import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  firstName: string;

  @IsOptional()
  secondName?: string;

  @IsNotEmpty()
  firstLastName: string;

  @IsOptional()
  secondLastName?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(10)
  phone: string;

  @IsNotEmpty()
  address: string;
}
