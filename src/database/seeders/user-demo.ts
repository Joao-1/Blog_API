import User from "../../modules/users/users.model";

(async () => {
	await User.create({
		username: "João Vitor",
		password: "$2a$10$RPOdJysX7KVLfmEial/u7Or3iMuCvFtc/E8f.4LyPmUQOphvDlY42",
		email: "joaovitormartinsneto9@gmail.com",
	});
})();
