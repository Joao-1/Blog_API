import { JwtService } from "@nestjs/jwt";

export default (userId: string, jwtService: JwtService) => {
	return { acess_token: jwtService.sign({ sub: userId }) };
};
