import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class NotificationService {
	private readonly logger = new Logger(NotificationService.name);

	handleNotification(data: unknown) {
		this.logger.debug('Notificación recibida:', data);
	}
}
