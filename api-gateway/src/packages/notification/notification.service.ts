import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Injectable()
export class NotificationService {
  public async handshake() {
    return 'This action handshakes the notification';
  }

  public async create(createNotificationDto: CreateNotificationDto) {
    return 'This action adds a new notification';
  }

  public async findAll() {
    return `This action returns all notification`;
  }

  public async findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  public async update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  public async remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
