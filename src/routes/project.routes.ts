import { Router } from "express";
import { CreateProjectController } from "../modules/user/usecases/createProject/CreateProjectController";
import { ListProjectsController } from "../modules/user/usecases/listProjects/ListProjectsController";
import { ListUserProjectsController } from "../modules/user/usecases/listUserProjects/ListUserProjectsController";
import { ListProjectsByEmailController } from "../modules/user/usecases/listProjectsByEmail/ListProjectsByEmailController";
import { ensureAuthetnticated } from "../middlewares/ensureAuthenticated";
import multer from "multer";
import uploadConfig from "../config/upload";
import { DeleteProjectController } from "../modules/user/usecases/deleteProject/DeleteProjectController";

const projectRoutes = Router();

const createProjectController = new CreateProjectController();
const listProjectsController = new ListProjectsController();
const listUserProjectsController = new ListUserProjectsController();
const listProjectsByEmailController = new ListProjectsByEmailController();
const deleteProjectController = new DeleteProjectController();
const uploadAvatar = multer(uploadConfig);

projectRoutes.use(ensureAuthetnticated);

projectRoutes.post("/", uploadAvatar.single("image"), createProjectController.handler);
projectRoutes.get("/", listProjectsController.handle);
projectRoutes.get("/me", listUserProjectsController.handle);
projectRoutes.get("/all", listProjectsByEmailController.handle);
projectRoutes.delete("/:id", deleteProjectController.handle);
export { projectRoutes }