import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Controller('/notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get("/handshake")
  public async handshake() {
    return this.notificationService.handshake();
  }

  @Get()
  public async findAll() {
    return this.notificationService.findAll();
  }

  @Post()
  public async create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationService.create(createNotificationDto);
  }

  @Get('/:id')
  public async findOne(@Param('id') id: string) {
    return this.notificationService.findOne(+id);
  }

  @Patch('/:id')
  public async update(@Param('id') id: string, @Body() updateNotificationDto: UpdateNotificationDto) {
    return this.notificationService.update(+id, updateNotificationDto);
  }

  @Delete('/:id')
  public async remove(@Param('id') id: string) {
    return this.notificationService.remove(+id);
  }
}
