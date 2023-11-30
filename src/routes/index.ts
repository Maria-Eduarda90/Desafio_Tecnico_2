import { Router } from "express";
import { CreateUserController } from "../controllers/createUserController/CreateUser.controller";
import { AuthUserController } from "../controllers/authUserController/AuthUser.controller";

const router = Router();

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();

router.post("/api/signUp", createUserController.handleSignUp);
router.post("/api/signIn", authUserController.handleSignIn);

export { router };
