import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { SequelizeModule, SequelizeModuleOptions } from "@nestjs/sequelize";

@Module({
	imports: [
		SequelizeModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) =>
				({
					dialect: configService.get<string>("database.dialect"),
					host: configService.get<string>("database.host"),
					port: configService.get<number>("database.port"),
					username: configService.get<string>("database.username"),
					password: configService.get<string>("database.password"),
					database: configService.get<string>("database.database"),
					autoLoadModels: true,
					synchronize: false,
				} as SequelizeModuleOptions),
		}),
	],
})
export default class PostgresModule {}
