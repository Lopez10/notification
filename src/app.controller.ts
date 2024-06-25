import { Controller } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
	constructor(private readonly notificationService: NotificationService) {}

	@MessagePattern('notification_created')
	run(@Payload() data: Record<string, unknown>) {
		this.notificationService.handleNotification({ message: data });
	}
}
