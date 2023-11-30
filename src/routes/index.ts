import { Router } from "express";
import { CreateUserController } from "../controllers/createUserController/CreateUser.controller";
import { AuthUserController } from "../controllers/authUserController/AuthUser.controller";
import { ListUserController } from "../controllers/listUserController/ListUser.controller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();
const listUserController = new ListUserController();

router.post("/api/signUp", createUserController.handleSignUp);
router.post("/api/signIn", authUserController.handleSignIn);
router.get(
  "/api/list_user",
  ensureAuthenticated,
  listUserController.handleList,
);

export { router };
