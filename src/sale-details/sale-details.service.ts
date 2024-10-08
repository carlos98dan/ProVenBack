import { Injectable } from '@nestjs/common';
import { CreateSaleDetailDto } from './dto/create-sale-detail.dto';
import { UpdateSaleDetailDto } from './dto/update-sale-detail.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SaleDetailsService {
  constructor(private prismaService: PrismaService) {}

  create(createSaleDetailDto: CreateSaleDetailDto) {
    return this.prismaService.saleDetail.create({
      data: createSaleDetailDto,
    });
  }

  findAll() {
    return this.prismaService.saleDetail.findMany();
  }

  findOne(id: number) {
    return this.prismaService.saleDetail.findUnique({
      where: { id },
    });
  }

  update(id: number, updateSaleDetailDto: UpdateSaleDetailDto) {
    return this.prismaService.saleDetail.update({
      data: updateSaleDetailDto,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prismaService.saleDetail.delete({
      where: { id },
    });
  }
}
