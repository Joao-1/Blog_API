import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import bcrypt from "bcryptjs";
import UsersService from "src/modules/users/users.service";
import { promisify } from "util";

@Injectable()
export default class AuthService {
	// eslint-disable-next-line no-unused-vars
	constructor(private userService: UsersService, private jwtService: JwtService) {}

	async validateUser(email: string, pass: string) {
		const user = await this.userService.findOne(email);

		if (user && (await promisify(bcrypt.compare)(pass, user.password))) {
			// eslint-disable-next-line no-unused-vars
			const { password, ...result } = user;
			return result;
		}
		return null;
	}

	async login(user: any) {
		const payload = { username: user.dataValues.username, sub: user.dataValues.id };
		return { acess_token: this.jwtService.sign(payload) };
	}
}
