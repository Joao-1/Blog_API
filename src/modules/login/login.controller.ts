/* eslint-disable no-empty-function */
import { Controller, Get, Post, Req, Request, UseGuards } from "@nestjs/common";
import GoogleAuthGuard from "src/authentication/guards/google-auth.guard";
import LocalAuthGuard from "src/authentication/guards/local-auth.guard";
import LoginService from "./login.service";

@Controller("login")
export default class LoginController {
	// eslint-disable-next-line no-unused-vars
	constructor(private loginService: LoginService) {}

	@UseGuards(LocalAuthGuard)
	@Post()
	async login(@Request() req) {
		return this.loginService.generateJWT(req.user);
	}

	@Get("google")
	@UseGuards(GoogleAuthGuard)
	async googleAuth() {}

	@Get("google/redirect")
	@UseGuards(GoogleAuthGuard)
	googleAuthRedirect(@Req() req) {
		return req.user;
	}
}
