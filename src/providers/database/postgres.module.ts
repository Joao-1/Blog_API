import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Dialect } from "sequelize/dist";

@Module({
	imports: [
		SequelizeModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				dialect: configService.get<string>("database.dialect") as Dialect,
				host: configService.get<string>("database.host"),
				port: configService.get<number>("database.port"),
				username: configService.get<string>("database.username"),
				password: configService.get<string>("database.password"),
				database: configService.get<string>("database.database"),
				autoLoadModels: true,
				synchronize: false,
			}),
		}),
	],
})
export default class PostgresModule {}
