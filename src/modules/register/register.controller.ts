import { Controller } from "@nestjs/common";
import RegisterService from "./register.service";

@Controller()
export default class RegisterController {
	// eslint-disable-next-line no-unused-vars
	constructor(private registerService: RegisterService) {}
}
