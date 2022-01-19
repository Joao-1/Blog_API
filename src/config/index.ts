import { ConfigModule } from "@nestjs/config";
import appConfig from "./appConfig";
import databaseConfig from "./databaseConfig";

const env = `.env.${process.env.NODE_ENV}`;
console.log(env);
const config = ConfigModule.forRoot({
	envFilePath: env,
	load: [appConfig, databaseConfig],
	isGlobal: true,
	expandVariables: true,
});

export default config;
