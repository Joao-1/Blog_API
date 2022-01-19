import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export default class JwtStrategy {
	constructor(private configService: ConfigService) {
		console.log(configService);
		// super({
		// 	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		// 	ignoreExpiration: false,
		// 	secretOrKey: configService.get<string>("app.jwtSecret"),
		// });
	}

	async validate(payload: any) {
		return { userId: payload.sub, username: payload.username };
	}
}
