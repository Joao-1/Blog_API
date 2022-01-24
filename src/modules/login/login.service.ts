import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import IGoogleUser from "src/authentication/interfaces/googleUser.interface";
import { LoginErrors } from "src/common/exceptions/httpExceptions";
import generateJWT from "src/common/helpers/generateJWT";
import UserRepository from "src/modules/user/user.repository";
import IUser from "../user/interfaces/user.interface";

@Injectable()
export default class LoginService {
	// eslint-disable-next-line no-unused-vars
	constructor(private userRepository: UserRepository, private jwtService: JwtService) {}

	async defaultLogin(user: IUser) {
		return generateJWT(user.id, this.jwtService);
	}

	async loginWithGoogle(userGoogle: IGoogleUser) {
		if (!(await this.userRepository.checkIfUserExistsByGoogleId(userGoogle.sub))) {
			throw new LoginErrors.UserWithGoogleSubDoesNotExists();
		}

		const userFromDb = await this.userRepository.findByGoogleId(userGoogle.sub);

		return generateJWT(userFromDb.id, this.jwtService);
	}
}
