import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export default class CreateUserDtoBody {
	@IsNotEmpty()
	username: string;

	@MinLength(6)
	@IsNotEmpty()
	password: string;

	@IsNotEmpty()
	@IsString()
	@IsEmail()
	email: string;
}
