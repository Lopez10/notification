import { NotificationModule } from '@modules/notification/notification.module';
import { Module } from '@nestjs/common';

@Module({
	imports: [NotificationModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
