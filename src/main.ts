import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import * as csurf from "csurf";
import * as helmet from "helmet";
import AppModule from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { cors: true });
	const configService = app.get(ConfigService);

	app.use(helmet);
	app.use(csurf);

	await app.listen(configService.get("app.port"));
}
bootstrap();
