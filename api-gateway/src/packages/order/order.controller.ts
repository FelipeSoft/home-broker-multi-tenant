import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  public async create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  public async findAll() {
    return this.orderService.findAll();
  }

  @Get('/:id')
  public async findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @Patch('/:id')
  public async update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  @Delete('/:id')
  public async remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
