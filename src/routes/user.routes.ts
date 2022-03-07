import { Router } from "express";

import { CreateUserController } from "../modules/user/usecases/createUser/CreateUserController";
import { ListUserController } from "../modules/user/usecases/listUser/ListCategoryController";
import { DeleteUserContoller } from "../modules/user/usecases/deleteUser/DeleteUserController";
import { SetAdminController } from "../modules/user/usecases/setAdmin/SetAdminController";
import { ensureAuthetnticated } from "../middlewares/ensureAuthenticated";
import { ActiveUserController } from "../modules/user/usecases/activeUser/ActiveUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const delteUserController = new DeleteUserContoller();
const setAdminController = new SetAdminController();
const activeUserController = new ActiveUserController();

userRoutes.post("/", createUserController.handle);

userRoutes.put("/enableUser", activeUserController.handle);

userRoutes.use(ensureAuthetnticated);

userRoutes.get("/", listUserController.handle);
userRoutes.delete("/:id", delteUserController.handle);

userRoutes.put("/admin", setAdminController.handle);

export { userRoutes };
