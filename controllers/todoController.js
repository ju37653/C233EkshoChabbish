import { z } from "zod";
import { prisma } from "../database/prisma.js";

export const createTodo = async (req, res) => {
  const schema = z.object({
    title: z.string().min(1),
    description: z.string().optional(),
  });

  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid request data", errors: parsed.error.flatten() });
  }

  const todo = await prisma.todos.create({
    data: {
      user_id: req.user.id,
      title: parsed.data.title,
      description: parsed.data.description,
    },
  });

  res.json({ message: "Todo created", todo });
};

export const getMyTodos = async (req, res) => {
  const todos = await prisma.todos.findMany({
    where: { user_id: req.user.id },
    orderBy: { created_at: "desc" },
  });

  res.json({ todos });
};

export const deleteTodo = async (req, res) => {
  const schema = z.object({ id: z.string().uuid() });
  const parsed = schema.safeParse({ id: req.params.id });
  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid request data", errors: parsed.error.flatten() });
  }

  const existing = await prisma.todos.findUnique({ where: { id: parsed.data.id } });
  if (!existing || existing.user_id !== req.user.id) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const deleted = await prisma.todos.delete({ where: { id: parsed.data.id } });
  res.json({ message: "Todo deleted", todo: deleted });
};