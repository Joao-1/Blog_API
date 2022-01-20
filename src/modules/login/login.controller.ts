import { Controller, Post, Request } from "@nestjs/common";
import LoginService from "./login.service";

@Controller()
export default class LoginController {
	// eslint-disable-next-line no-unused-vars
	constructor(private loginService: LoginService) {}

	@Post("signup")
	async login(@Request() req) {
		return req.user;
	}
}
