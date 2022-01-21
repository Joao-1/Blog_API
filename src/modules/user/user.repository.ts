import { Injectable } from "@nestjs/common";
import { DataBaseError } from "src/common/exceptions/serverErros";
import IUser from "./interfaces/user.interface";
import User from "./models/user.model";

@Injectable()
export default class UserRepository {
	async insertNewUser(user: IUser) {
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

	// async getAllBooks() {
	// 	try {
	// 	} catch (error) {
	// 		throw new DataBaseError(
	// 			"An error occurred while trying to get all books from the database",
	// 			error,
	// 			"UserRepository"
	// 		);
	// 	}
	// }

	// async updateABook(bookId: number, newValues: IBook) {
	// 	try {
	// 	} catch (error) {
	// 		throw new DataBaseError(
	// 			"An error occurred when trying to update a book in the database.",
	// 			error,
	// 			"UserRepository"
	// 		);
	// 	}
	// }

	// async deleteABook(bookId: number) {
	// 	try {
	// 	} catch (error) {
	// 		throw new DataBaseError(
	// 			"An error occurred when trying to delete a book in the database.",
	// 			error,
	// 			"UserRepository"
	// 		);
	// 	}
	// }

	async checkIfUserExistsByName(username: string) {
		try {
			const possibleUsers = await User.findAll({ where: { username } });
			return !!possibleUsers.length;
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
			const possibleUsers = await User.findAll({ where: { email } });
			return !!possibleUsers.length;
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
			const possibleUsers = await User.findAll({ where: { id: userId } });
			return !!possibleUsers.length;
		} catch (error) {
			throw new DataBaseError(
				"An error occurred when trying to verify the existence of a user by id",
				error,
				"UserRepository"
			);
		}
	}
}
