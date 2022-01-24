import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import User from "./models/user.model";
import UserController from "./user.controller";
import UserRepository from "./user.repository";
import UsersService from "./user.service";

@Module({
	imports: [SequelizeModule.forFeature([User])],
	providers: [UsersService, UserRepository],
	controllers: [UserController],
	exports: [UsersService, UserRepository],
})
export default class UserModule {}
