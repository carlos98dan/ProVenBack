import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [ClientsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
