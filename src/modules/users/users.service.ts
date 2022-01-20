import { Injectable } from "@nestjs/common";
import User from "./users.model";

@Injectable()
export default class UsersService {
	async findOne(email: string): Promise<User> {
		const user = await User.findOne({ where: { email } });
		return user;
	}
}
