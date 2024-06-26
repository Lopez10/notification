import { Controller } from '@nestjs/common';
import { CreateNotification } from '../application/create-notification.use-case';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class NotificationController {
	constructor(private readonly notificationService: CreateNotification) {}

	@MessagePattern('notification_created')
	run(@Payload() data: Record<string, unknown>) {
		this.notificationService.handleNotification({ message: data });
	}
}
