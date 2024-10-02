import { IsInt, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  @Min(0)
  price: string;

  @IsInt()
  @Min(0)
  stock: string;

  @IsInt()
  @IsNotEmpty()
  categoryId: string;
}
