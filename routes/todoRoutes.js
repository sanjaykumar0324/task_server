import express from "express";
import { createTodoController, getAllTodosController, updateTodoController, deleteTodoController } from "../controller/todoController.js";

const router = express.Router();

router.post('/create', createTodoController);
router.get('/get-all', getAllTodosController);
router.put('/update/:id', updateTodoController);
router.delete('/delete/:id', deleteTodoController); 

export default router;
