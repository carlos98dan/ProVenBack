import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SalesService {
  constructor(private prismaService: PrismaService) {}

  create(createSaleDto: CreateSaleDto) {
    return this.prismaService.sale.create({
      data: createSaleDto,
    });
  }

  findAll() {
    return this.prismaService.sale.findMany();
  }

  findOne(id: number) {
    return this.prismaService.sale.findUnique({
      where: { id },
    });
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return this.prismaService.sale.update({
      data: updateSaleDto,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prismaService.sale.delete({
      where: { id },
    });
  }
}
