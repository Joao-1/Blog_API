import { ConfigModule } from "@nestjs/config";
import appConfig from "./appConfig";
import databaseConfig from "./databaseConfig";
import googleConfig from "./googleConfig";

const config = ConfigModule.forRoot({
	envFilePath: [".env.dev", ".env", ".env.test"],
	load: [appConfig, databaseConfig, googleConfig],
	isGlobal: true,
	expandVariables: true,
});

export default config;
