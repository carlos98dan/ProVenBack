import { Module } from '@nestjs/common';
import { SaleDetailsService } from './sale-details.service';
import { SaleDetailsController } from './sale-details.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SaleDetailsController],
  providers: [SaleDetailsService, PrismaService],
})
export class SaleDetailsModule {}
