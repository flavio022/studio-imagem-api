import { Router } from "express";
import { CreateUserController } from "../modules/user/usecases/createUser/CreateUserController";
import { ListUserController } from "../modules/user/usecases/listUser/ListCategoryController";


const userRoutes = Router();
const createUserController = new CreateUserController();
const listUserController = new ListUserController();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", listUserController.handler);

export { userRoutes };
