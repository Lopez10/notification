import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(
		AppModule,
		{
			transport: Transport.RMQ,
			options: {
				urls: ['amqp://guest:guest@localhost:5672'],
				queue: 'notifications_queue',
				queueOptions: {
					durable: false,
				},
			},
		},
	);
	await app
		.listen()
		.then(() => console.log('Microservice is listening'))
		.catch((err) => console.error(err));
}
bootstrap();
