module.exports = function getEnv() {
	let env;
	switch (process.env.NODE_ENV.trim()) {
		case "dev":
			env = ".env.dev";
			break;
		case "test":
			env = ".env.test";
			break;
		case "prod":
			env = ".env";
			break;
		default:
			env = ".env.dev";
	}
	return env;
};
