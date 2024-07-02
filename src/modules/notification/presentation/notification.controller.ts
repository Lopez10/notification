import { Controller } from '@nestjs/common';
import { CreateNotification } from '../application/create-notification.use-case';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { NOTIFICATION_CREATED } from 'src/patterns';

@Controller()
export class NotificationController {
	constructor(private readonly notificationService: CreateNotification) {}

	@MessagePattern(NOTIFICATION_CREATED)
	run(@Payload() data: Record<string, unknown>) {
		this.notificationService.handleNotification({ message: data });
	}
}
