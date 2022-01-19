import { Injectable } from "@nestjs/common";
import User from "./users.model";

@Injectable()
export default class UsersService {
	async findOne(email: string): Promise<User> {
		throw new Error(email);
	}
}
