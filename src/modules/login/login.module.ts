import { Module } from "@nestjs/common";
import LoginController from "./login.controller";

@Module({
	controllers: [LoginController],
})
export default class LoginService {}
