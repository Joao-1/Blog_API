import { UUIDV4 } from "sequelize";
import { AllowNull, Column, DataType, Default, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export default class User extends Model {
	@Column(DataType.UUIDV4)
	@PrimaryKey
	@AllowNull(false)
	@Default(UUIDV4)
	id!: string;

	@Column
	@AllowNull(false)
	username: string;

	@Column
	@AllowNull(false)
	password: string;

	@Column
	@AllowNull(false)
	email: string;
}
