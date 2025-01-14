import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  public async create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new order';
  }

  public async findAll() {
    return `This action returns all order`;
  }

  public async findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  public async update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  public async remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
