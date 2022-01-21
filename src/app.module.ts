import { Module } from "@nestjs/common";
import AuthModule from "./authentication/auth.module";
import configValues from "./config";
import LoginModule from "./modules/login/login.module";
import UsersModule from "./modules/user/user.module";
import PostgresModule from "./providers/database/postgres.module";

@Module({
	imports: [configValues, PostgresModule, AuthModule, UsersModule, LoginModule],
})
export default class AppModule {}
