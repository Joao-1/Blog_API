import { Module } from "@nestjs/common";
import sequelizeConfig from "./config/configFunctions/sequelizeConfig";
import configValues from "./config/loadConfigValues";
import { AuthModule } from "./modules/auth/auth.module";
import { UsersModule } from "./modules/users/users.module";

@Module({
	imports: [configValues, sequelizeConfig, AuthModule, UsersModule],
})
export default class AppModule {}
