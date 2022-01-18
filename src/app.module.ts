import { Module } from "@nestjs/common";
import AuthModule from "./authentication/auth.module";
import configValues from "./config";
import UsersModule from "./models/users/users.module";
import PostgresModule from "./providers/database/postgress.module";

@Module({
	imports: [configValues, PostgresModule, AuthModule, UsersModule],
})
export default class AppModule {}
