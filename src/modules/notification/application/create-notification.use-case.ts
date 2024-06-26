import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CreateNotification {
	private readonly logger = new Logger(CreateNotification.name);

	handleNotification(data: unknown) {
		this.logger.debug('Notificación recibida:', data);
	}
}
