import { Router } from "express";
import { CreateUserController } from "../modules/user/usecases/createUser/CreateUserController";
import { ListUserController } from "../modules/user/usecases/listUser/ListCategoryController";
import { DeleteUserContoller } from "../modules/user/usecases/deleteUser/DeleteUserController";
import { ensureAuthetnticated } from "../middlewares/ensureAuthenticated";

const userRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const delteUserController = new DeleteUserContoller();

userRoutes.post("/", createUserController.handle);

userRoutes.use(ensureAuthetnticated);

userRoutes.get("/", listUserController.handle);
userRoutes.delete("/:id", delteUserController.handle);

export { userRoutes };
