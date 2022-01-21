import { UUIDV4 } from "sequelize";
import { AllowNull, Column, DataType, Default, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export default class User extends Model {
	@PrimaryKey
	@AllowNull(false)
	@Default(UUIDV4)
	@Column(DataType.UUIDV4)
	id!: string;

	@AllowNull(false)
	@Column
	username: string;

	@AllowNull(false)
	@Column
	password: string;

	@AllowNull(false)
	@Column
	email: string;
}
