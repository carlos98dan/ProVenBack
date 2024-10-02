import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

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
  phone: string;

  @IsNotEmpty()
  address: string;
}
