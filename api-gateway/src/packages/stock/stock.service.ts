import { Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Injectable()
export class StockService {
  public async create(createStockDto: CreateStockDto) {
    return 'This action adds a new stock';
  }

  public async findAll() {
    return `This action returns all stock`;
  }

  public async findOne(id: number) {
    return `This action returns a #${id} stock`;
  }

  public async update(id: number, updateStockDto: UpdateStockDto) {
    return `This action updates a #${id} stock`;
  }

  public async remove(id: number) {
    return `This action removes a #${id} stock`;
  }
}
