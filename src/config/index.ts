import { ConfigModule } from "@nestjs/config";
import appConfig from "./appConfig";
import databaseConfig from "./databaseConfig";

const config = ConfigModule.forRoot({
	envFilePath: [".env.dev", ".env", ".env.test"],
	load: [appConfig, databaseConfig],
	isGlobal: true,
	expandVariables: true,
});

export default config;
