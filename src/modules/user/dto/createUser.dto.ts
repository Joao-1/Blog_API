/* eslint-disable max-classes-per-file */
import { Type } from "class-transformer";
import {
	IsBooleanString,
	IsEmail,
	IsIn,
	IsNotEmpty,
	IsString,
	MinLength,
	ValidateIf,
	ValidateNested,
} from "class-validator";

class OAuthDTO {
	@IsNotEmpty()
	@IsBooleanString()
	value: boolean;

	@ValidateIf((p) => p.value === "true")
	@IsIn(["google", "facebook", "twitter"])
	@IsNotEmpty()
	type: "google" | "facebook" | "twitter";
}

export default class CreateUserDtoBody {
	@ValidateIf((p) => p.isOAuth && p.isOAuth.value === "false")
	@IsNotEmpty()
	username: string;

	@ValidateIf((p) => p.isOAuth && p.isOAuth.value === "false")
	@MinLength(6)
	@IsNotEmpty()
	password: string;

	@ValidateIf((p) => p.isOAuth && p.isOAuth.value === "false")
	@IsNotEmpty()
	@IsString()
	@IsEmail()
	email: string;

	@IsNotEmpty()
	@ValidateNested()
	@Type(() => OAuthDTO)
	isOAuth: OAuthDTO;

	@ValidateIf((p) => p.isOAuth && p.isOAuth.value === "true" && p.isOAuth.type === "google")
	@IsNotEmpty()
	googleId: string;

	@ValidateIf((p) => p.isOAuth && p.isOAuth.value === "true" && p.isOAuth.type === "facebook")
	@IsNotEmpty()
	facebookId: string;

	@ValidateIf((p) => p.isOAuth && p.isOAuth.value === "true" && p.isOAuth.type === "twitter")
	@IsNotEmpty()
	twiiterId: string;
}
