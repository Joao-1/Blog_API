import { ConfigModule } from "@nestjs/config";
import appConfig from "./configValues/appConfig";
import databaseConfig from "./configValues/databaseConfig";

export default ConfigModule.forRoot({
	envFilePath: [".env.dev", ".env.test"],
	load: [appConfig, databaseConfig],
	isGlobal: true,
	expandVariables: true,
});
