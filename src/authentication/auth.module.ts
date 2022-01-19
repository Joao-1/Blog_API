import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import UsersModule from "src/modules/users/users.module";
import AuthController from "./auth.controller";
import AuthService from "./auth.service";
import JwtStrategy from "./strategies/jwt.strategy";
import LocalStrategy from "./strategies/local.strategy";

@Module({
	imports: [
		UsersModule,
		PassportModule,
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				secret: configService.get<string>("app.jwtSecret"),
				signOptions: { expiresIn: configService.get<string>("app.jwtExpiresIn") },
			}),
		}),
	],
	providers: [AuthService, LocalStrategy, JwtStrategy],
	controllers: [AuthController],
	exports: [AuthService, ConfigModule],
})
export default class AuthModule {}
