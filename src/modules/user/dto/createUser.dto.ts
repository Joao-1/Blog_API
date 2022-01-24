import { IsBooleanString, IsEmail, IsNotEmpty, IsOptional, IsString, MinLength, ValidateIf } from "class-validator";

export default class CreateUserDtoBody {
	@ValidateIf((p) => p.withOAuth === "false")
	@IsNotEmpty()
	username: string;

	@ValidateIf((p) => p.withOAuth === "false")
	@MinLength(6)
	@IsNotEmpty()
	password: string;

	@ValidateIf((p) => p.withOAuth === "false")
	@IsNotEmpty()
	@IsString()
	@IsEmail()
	email: string;

	@IsNotEmpty()
	@IsBooleanString()
	withOAuth: string;

	@IsOptional()
	googleId: string;
}
