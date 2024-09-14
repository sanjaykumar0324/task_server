import TodoModel from "../models/TodoModel.js";

//get All todos
export const getAllTodosController = async (req, res) => {
  try {
    const todos = await TodoModel.find();
    res.status(200).send({
      success: true,
      todos,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in get all todos api",
    });
  }
};

export const createTodoController = async (req, res) => {
  try {
    const { title, task } = req.body;
    if (!title || !task) {
      return res.status(500).send({
        success: false,
        message: "Please Provide all fields",
      });
    }
    const todo =await TodoModel.create({
        title,
        task
    })
    res.status(201).send({
        success: true,
        message: "Todo Created Successfully",
        todo
      });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in creating todo api",
    });
  }
};


//update
// Update a todo by ID
export const updateTodoController = async (req, res) => {
    try {
        const { id } = req.params; 
        const { title, task } = req.body; 

        if (!title || !task) {
            return res.status(400).send({
                success: false,
                message: "Please provide all fields"
            });
        }

        const updatedTodo = await TodoModel.findByIdAndUpdate(
            id,
            { title, task },
            { new: true }
        );

        if (!updatedTodo) {
            return res.status(404).send({
                success: false,
                message: "Todo not found"
            });
        }

        res.status(200).send({
            success: true,
            message: "Todo updated successfully",
            todo: updatedTodo
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in updating todo",
            error: error.message
        });
    }
};

export const deleteTodoController = async (req, res) => {
    try {
        const { id } = req.params; 

        const deletedTodo = await TodoModel.findByIdAndDelete(id);

        if (!deletedTodo) {
            return res.status(404).send({
                success: false,
                message: "Todo not found"
            });
        }

        res.status(200).send({
            success: true,
            message: "Todo deleted successfully",
            todo: deletedTodo
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in deleting todo",
            error: error.message
        });
    }
};
