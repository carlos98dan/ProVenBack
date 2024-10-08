import { isInt, IsInt, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateSaleDetailDto {
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  price: number;

  @IsNotEmpty()
  @IsInt()
  productId: number;

  @IsNotEmpty()
  @IsInt()
  saleId: number;
}
