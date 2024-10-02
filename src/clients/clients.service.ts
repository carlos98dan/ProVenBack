import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientsService {
  constructor(private prismaService: PrismaService) {}

  create(createClientDto: CreateClientDto) {
    return this.prismaService.client.create({
      data: createClientDto,
    });
  }

  findAll() {
    return this.prismaService.client.findMany();
  }

  findOne(id: string) {
    return this.prismaService.client.findUnique({
      where: { id },
    });
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    return this.prismaService.client.update({
      data: updateClientDto,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prismaService.client.delete({
      where: { id },
    });
  }
}
