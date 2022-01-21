import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export default class LoginService {
	// eslint-disable-next-line no-unused-vars
	constructor(private jwtService: JwtService) {}

	async login(user: any) {
		const payload = { username: user.dataValues.username, sub: user.dataValues.id };
		return { acess_token: this.jwtService.sign(payload) };
	}
}
