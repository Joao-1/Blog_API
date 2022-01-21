import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import AuthModule from "src/authentication/auth.module";
import UserModule from "src/modules/user/user.module";
import LoginController from "./login.controller";
import LoginService from "./login.service";

@Module({
	imports: [
		UserModule,
		AuthModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				secret: configService.get<string>("app.jwtSecret"),
				signOptions: { expiresIn: configService.get<string>("app.jwtExpiresIn") },
			}),
		}),
	],
	providers: [LoginService],
	controllers: [LoginController],
})
export default class LoginModule {}
