import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";

@Injectable()
export default class GoogleStrategy extends PassportStrategy(Strategy, "google") {
	constructor(private configService: ConfigService) {
		super({
			clientID: configService.get<string>("google.clientId"),
			clientSecret: configService.get<string>("google.secretKey"),
			callbackURL: configService.get<string>("google.callbackURL"),
			scope: ["email", "profile"],
		});
	}

	async validate(accessToken: string, refreshToken: string, profile: any): Promise<any> {
		const { name, emails, photos } = profile;
		const user = {
			email: emails[0].value,
			firstName: name.givenName,
			lastName: name.familyName,
			picture: photos[0].value,
			accessToken,
			refreshToken,
		};
		return user;
	}
}
