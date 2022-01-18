import { registerAs } from "@nestjs/config";

export default registerAs("database", () => ({
	dialect: process.env.DATABASE_DIALECT,
	username: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_DATABASE,
	host: process.env.DATABASE_HOST,
	port: process.env.DATABASE_PORT,
}));
