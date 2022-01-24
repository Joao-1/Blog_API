module.exports = {
	async up(queryInterface, Sequelize) {
		queryInterface.addColumn("Users", "googleId", {
			type: Sequelize.STRING,
		});
	},

	async down(queryInterface) {
		queryInterface.removeColumn("Users", "googleId");
	},
};
