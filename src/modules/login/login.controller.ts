import { Controller, Post, Request, UseGuards } from "@nestjs/common";
import LocalAuthGuard from "src/authentication/guards/local-auth.guard";
import LoginService from "./login.service";

@Controller("auth")
export default class LoginController {
	// eslint-disable-next-line no-unused-vars
	constructor(private loginService: LoginService) {}

	@UseGuards(LocalAuthGuard)
	@Post("signin")
	async login(@Request() req) {
		return this.loginService.login(req.user);
	}
}
