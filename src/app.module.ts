import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ClientsModule } from './clients/clients.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { SellersModule } from './sellers/sellers.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ClientsModule, CategoriesModule, UsersModule, SellersModule, ProductModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
