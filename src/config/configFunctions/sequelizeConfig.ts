import { ConfigModule, ConfigService } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";

export default SequelizeModule.forRootAsync({
	imports: [ConfigModule],
	useFactory: (configService: ConfigService) => {
		return configService.get("database");
	},
});
