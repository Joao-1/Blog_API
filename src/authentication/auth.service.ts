import { Injectable } from "@nestjs/common";
import bcrypt from "bcryptjs";
import UserRepository from "src/modules/user/user.repository";
import UserService from "src/modules/user/user.service";
import { promisify } from "util";
import IGoogleUser from "./interfaces/googleUser.interface";

@Injectable()
export default class AuthService {
	// eslint-disable-next-line no-unused-vars
	constructor(private userService: UserService, private userRepository: UserRepository) {}

	async validateUser(email: string, pass: string) {
		const user = await this.userService.findOne(email);

		if (user && (await promisify(bcrypt.compare)(pass, user.password))) {
			// eslint-disable-next-line no-unused-vars
			const { password, ...result } = user;
			return result;
		}
		return null;
	}

	async googleAuth(user: IGoogleUser) {
		if (!user) {
			throw new Error("arruma esse erro aqui");
		}

		if (!this.userRepository.checkIfUserExistsByGoogleId(user.sub)) {
			throw new Error("arruma esse erro aqui2");
		}
	}
}
