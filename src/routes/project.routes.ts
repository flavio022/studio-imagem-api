import { Router } from "express";
import { CreateProjectController } from "../modules/user/usecases/createProject/CreateProjectController";
import { ListProjectsController } from "../modules/user/usecases/listProjects/ListProjectsController";
import { ListUserProjectsUseCase } from "../modules/user/usecases/listUserProjects/ListUserProjectsUseCase";
import { ListUserProjectsController } from "../modules/user/usecases/listUserProjects/ListUserProjectsController";
import { ensureAuthetnticated } from "../middlewares/ensureAuthenticated";
import multer from "multer";
import uploadConfig from "../config/upload";

const projectRoutes = Router();

const createProjectController = new CreateProjectController();
const listProjectsController = new ListProjectsController();
const listUserProjectsController = new ListUserProjectsController();

const uploadAvatar = multer(uploadConfig);

projectRoutes.use(ensureAuthetnticated);

projectRoutes.post("/", uploadAvatar.single("image"), createProjectController.handler);
projectRoutes.get("/", listProjectsController.handle);
projectRoutes.get("/me", listUserProjectsController.handle);

export { projectRoutes }