import bcrypt from "bcryptjs";

export default class Bcrypt {
	encrypt(value: any) {
		return bcrypt.hashSync(value, 10);
	}
}
