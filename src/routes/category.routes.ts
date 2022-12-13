import { Router } from "express";
import { ListCategoryController } from "../modules/categories/usecases/listCategories/ListCategoryController";
import { CreateCategoryController } from "../modules/categories/usecases/createCategory/CreateCategoryController";
import { DeleteProjectController } from "../modules/categories/usecases/delteCategory/DelteCategoryController";

import { ensureAuthetnticated } from "../middlewares/ensureAuthenticated";
import multer from "multer";
import uploadConfig from "../config/upload";

const categoryRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const deleteCategoryController = new DeleteProjectController();


categoryRoutes.post("/", createCategoryController.handler);
categoryRoutes.get("/", listCategoryController.handle);
categoryRoutes.delete("/:id", deleteCategoryController.handle);
categoryRoutes.use(ensureAuthetnticated);


export { categoryRoutes }