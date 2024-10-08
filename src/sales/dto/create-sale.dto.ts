import { IsInt, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateSaleDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  total: number;

  @IsNotEmpty()
  @IsInt()
  userId: number;

  @IsNotEmpty()
  @IsInt()
  sellerId: number;

  @IsNotEmpty()
  @IsInt()
  clientId: number;
}
