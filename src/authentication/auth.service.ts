import { Injectable } from "@nestjs/common";
import bcrypt from "bcryptjs";
import UserService from "src/modules/user/user.service";
import { promisify } from "util";

@Injectable()
export default class AuthService {
	// eslint-disable-next-line no-unused-vars
	constructor(private userService: UserService) {}

	async validateUser(email: string, pass: string) {
		const user = await this.userService.findOne(email);

		if (user && (await promisify(bcrypt.compare)(pass, user.password))) {
			// eslint-disable-next-line no-unused-vars
			const { password, ...result } = user;
			return result;
		}
		return null;
	}
}
