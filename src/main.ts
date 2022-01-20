import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import helmet from "helmet";
import AppModule from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { cors: true });
	const configService = app.get(ConfigService);

	app.use(helmet());
	// estudar melhor o que é csurf
	// app.use(csurf.default());

	await app.listen(configService.get("app.port"));
}
bootstrap();
