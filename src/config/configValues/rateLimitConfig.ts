import { registerAs } from "@nestjs/config";

export default registerAs("rateLimit", () => ({
	tll: 60,
	limit: 150,
}));
