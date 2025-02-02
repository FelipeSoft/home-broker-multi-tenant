import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Controller('/stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Post()
  public async create(@Body() createStockDto: CreateStockDto) {
    return this.stockService.create(createStockDto);
  }

  @Get()
  public async findAll() {
    return this.stockService.findAll();
  }

  @Get('/:id')
  public async findOne(@Param('id') id: string) {
    return this.stockService.findOne(+id);
  }

  @Patch('/:id')
  public async update(@Param('id') id: string, @Body() updateStockDto: UpdateStockDto) {
    return this.stockService.update(+id, updateStockDto);
  }

  @Delete('/:id')
  public async remove(@Param('id') id: string) {
    return this.stockService.remove(+id);
  }
}
