import { Injectable } from '@nestjs/common';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SellersService {
  constructor(private prismaService: PrismaService) {}

  create(createSellerDto: CreateSellerDto) {
    return this.prismaService.seller.create({
      data: createSellerDto,
    });
  }

  findAll() {
    return this.prismaService.seller.findMany();
  }

  findOne(id: number) {
    return this.prismaService.seller.findUnique({
      where: { id },
    });
  }

  update(id: number, updateSellerDto: UpdateSellerDto) {
    return this.prismaService.seller.update({
      data: updateSellerDto,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prismaService.seller.delete({
      where: { id },
    });
  }
}
