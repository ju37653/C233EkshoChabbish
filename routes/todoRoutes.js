import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { createTodo, getMyTodos, deleteTodo } from "../controllers/todoController.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", createTodo);
router.get("/", getMyTodos);
router.delete("/:id", deleteTodo);

export default router;