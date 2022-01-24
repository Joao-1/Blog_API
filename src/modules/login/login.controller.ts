/* eslint-disable no-empty-function */
import { Controller, Get, Post, Req, Request, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
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
		return this.loginService.defaultLogin(req.user.dataValues);
	}

	@Get("google")
	@UseGuards(GoogleAuthGuard)
	// eslint-disable-next-line no-empty-function
	async googleAuth() {}

	@Get("google/redirect")
	@UseGuards(GoogleAuthGuard)
	async googleAuthRedirect(@Req() req, @Res() res: Response) {
		console.log(req.user);
		const userJWT = await this.loginService.loginWithGoogle(req.user);
		res.status(200).json({ status: "success", acessToken: userJWT });
	}
}
