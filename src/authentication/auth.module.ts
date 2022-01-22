import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";
import UsersModule from "src/modules/user/user.module";
import AuthService from "./auth.service";
import GoogleStrategy from "./strategies/google.strategy";
import JwtStrategy from "./strategies/jwt.strategy";
import LocalStrategy from "./strategies/local.strategy";

@Module({
	imports: [UsersModule, PassportModule, ConfigModule],
	providers: [AuthService, LocalStrategy, JwtStrategy, GoogleStrategy],
	exports: [AuthService, ConfigModule],
})
export default class AuthModule {}
