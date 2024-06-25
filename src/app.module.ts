import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NotificationService } from './notification.service';
import { AppController } from './app.controller';

@Module({
	imports: [],
	controllers: [AppController],
	providers: [NotificationService],
})
export class AppModule {}
