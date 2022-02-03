import { Router } from 'express';
import { userRoutes } from './user.routes';
import { projectRoutes } from './project.routes';
import { authenticateRoutes } from './authenticate.routes';
import { categoryRoutes } from "./category.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/categories", categoryRoutes)
router.use(authenticateRoutes);

export { router };