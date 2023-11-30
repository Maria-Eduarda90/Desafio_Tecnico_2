import { Router } from "express";
import { CreateUserController } from "../controllers/createUserController/CreateUser.controller";
import { AuthUserController } from "../controllers/authUserController/AuthUser.controller";
import { ListUserController } from "../controllers/listUserController/ListUser.controller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { SearchUserController } from "../controllers/searchUserController/searchUser.controller";

const router = Router();

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();
const listUserController = new ListUserController();
const searchUserController = new SearchUserController();

router.post("/api/signUp", createUserController.handleSignUp);
router.post("/api/signIn", authUserController.handleSignIn);
router.get(
  "/api/list_user",
  ensureAuthenticated,
  listUserController.handleList,
);
router.get(
  "/api/list_user/:id",
  ensureAuthenticated,
  searchUserController.handleSearch,
);

export { router };
