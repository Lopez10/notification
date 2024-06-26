import { Module } from '@nestjs/common';
import { NotificationController } from './presentation/notification.controller';
import { CreateNotification } from './application/create-notification.use-case';

@Module({
	imports: [],
	controllers: [NotificationController],
	providers: [CreateNotification],
})
export class NotificationModule {}
