import { registerAs } from "@nestjs/config";

export default registerAs("app", () => ({
	port: process.env.PORT || 3000,
	jwtSecret: process.env.JWT_SECRET,
	jwtExpiresIn: process.env.JWT_EXPIRES_IN,
}));
