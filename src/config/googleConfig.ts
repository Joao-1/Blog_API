import { registerAs } from "@nestjs/config";

export default registerAs("google", () => ({
	clientId: process.env.GOOGLE_CLIENT_ID,
	secretKey: process.env.GOOGLE_SECRET_KEY,
	callbackURL: process.env.GOOGLE_CALLBACK_URL,
}));
