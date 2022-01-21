import { Body, Controller, HttpStatus, Post, Res, ValidationPipe } from "@nestjs/common";
import { Response } from "express";
import CreateUserDtoBody from "./dto/createUser.dto";
import UserService from "./user.service";

@Controller("user")
export default class UserController {
	// eslint-disable-next-line no-unused-vars
	constructor(private userService: UserService) {}

	@Post()
	async create(@Body(new ValidationPipe()) createUserDto: CreateUserDtoBody, @Res() res: Response) {
		const newUser = await this.userService.create(createUserDto);
		res.status(HttpStatus.CREATED).json({ success: true, newUser });
	}
}
