const getEnv = require("../utils/getEnv.js");
// eslint-disable-next-line import/no-extraneous-dependencies
require("dotenv").config({
	path: getEnv(),
});

const config = JSON.parse(
	JSON.stringify({
		username: process.env.DATABASE_USERNAME,
		password: process.env.DATABASE_PASSWORD,
		database: process.env.DATABASE_DATABASE,
		host: process.env.DATABASE_HOST,
		dialect: process.env.DATABASE_DIALECT,
		port: process.env.DATABASE_PORT,
	})
);

module.exports = config;
