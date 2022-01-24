import { Injectable } from "@nestjs/common";
import { CreateUserErrors } from "src/common/exceptions/httpExceptions";
import Bcrypt from "src/common/helpers/bcryptFunctions";
import CreateUserDtoBody from "./dto/createUser.dto";
import User from "./models/user.model";
import UserRepository from "./user.repository";

@Injectable()
export default class UserService {
	// eslint-disable-next-line no-unused-vars
	constructor(private userRepository: UserRepository) {}

	async create(user: CreateUserDtoBody) {
		// if (user.withOAuth) {
		// 	console.log(user);
		// }

		if (await this.userRepository.checkIfUserExistsByName(user.username)) {
			throw new CreateUserErrors.UserWithNameAlreadyExists();
		}

		if (await this.userRepository.checkIfUserExistsByEmail(user.email)) {
			throw new CreateUserErrors.UserWithEmailAlreadyExists();
		}

		user.password = new Bcrypt().encrypt(user.password);

		const newUser = await (await this.userRepository.insertNewUser(user)).toJSON();
		delete newUser.password;
		return newUser;
	}

	async findOne(email: string): Promise<User> {
		const user = await User.findOne({ where: { email } });
		return user;
	}
}
