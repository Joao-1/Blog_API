import { Injectable } from "@nestjs/common";
import { DataBaseError } from "src/common/exceptions/serverErros";
import CreateUserDtoBody from "./dto/createUser.dto";
import User from "./models/user.model";

@Injectable()
export default class UserRepository {
	async insertNewUser(user: CreateUserDtoBody) {
		try {
			return User.create(user);
		} catch (error) {
			throw new DataBaseError(
				"An error occurred when trying to insert a new record into the database",
				error,
				"UserRepository"
			);
		}
	}

	async findByGoogleId(googleId) {
		try {
			return User.findOne({ where: { googleId } });
		} catch (error) {
			throw new DataBaseError(
				"An error occurred while searching for a user by their Google Id",
				error,
				"UserRepository"
			);
		}
	}

	async checkIfUserExistsByName(username: string) {
		try {
			const possibleUser = await User.findOne({ where: { username } });
			return !!possibleUser;
		} catch (error) {
			throw new DataBaseError(
				"An error occurred when trying to verify the existence of a user by name",
				error,
				"UserRepository"
			);
		}
	}

	async checkIfUserExistsByEmail(email: string) {
		try {
			const possibleUser = await User.findOne({ where: { email } });
			return !!possibleUser;
		} catch (error) {
			throw new DataBaseError(
				"An error occurred when trying to verify the existence of a user by email",
				error,
				"UserRepository"
			);
		}
	}

	async checkIfUserExistsById(userId: string) {
		try {
			const possibleUser = await User.findOne({ where: { id: userId } });
			return !!possibleUser;
		} catch (error) {
			throw new DataBaseError(
				"An error occurred when trying to verify the existence of a user by id",
				error,
				"UserRepository"
			);
		}
	}

	async checkIfUserExistsByGoogleId(googleId: number) {
		try {
			const possibleUser = await User.findOne({ where: { googleId } });
			return !!possibleUser;
		} catch (error) {
			console.log(error);
			throw new DataBaseError(
				"An error occurred when trying to verify the existence of a user by GoogleId",
				error,
				"UserRepository"
			);
		}
	}
}
