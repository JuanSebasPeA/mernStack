//controllers with the logic of the routes

const { pool } = require("../db.js");

//---------------------------------------------------------
//get all tasks
const getTasks = async (req, res) => {
  //getting all tasks
  try {
    const [result] = await pool.query("SELECT * FROM tasks");
    //console.log(result);

    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

//---------------------------------------------------------
//get a task by id
const getTaskById = async (req, res) => {
  //getting the id as a parameter
  const { id } = req.params;

  //getting a task by id
  try {
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);

    if (result.length > 0) {
      console.log(result[0]);
      return res.json(result[0]);
    } else {
      return res.status(404).json({ message: `Task with id ${id} not found` });
    }
  } catch (error) {
    console.log(error);
  }
};

//update a task by id
const updateTaskById = (req, res) => {
  //getting the id as a parameter
  const { id } = req.params;
  const { title, description, done } = req.body;

  //updating a task by id
  try {
    const result = pool.query(
      "UPDATE tasks SET title = ?, description = ?, done = ? WHERE id = ?",
      [title, description, done, id]
    );
    return res.json(result);
  } catch (error) {
    console.log(error);
  }
};

//---------------------------------------------------------
//create a task
const createTask = async (req, res) => {
  //console.log(req.body);
  const { title, description } = req.body;
  const done = false;

  //inserting a task
  try {
    const result = await pool.query(
      "INSERT INTO tasks (title, description, done) VALUES (?, ?, ?)",
      [title, description, done]
    );

    console.log("Task created");
    console.log(result);

    return res.json({
      title,
      description,
      done,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//---------------------------------------------------------
//delete a task by id
const deleteTaskById = async (req, res) => {
  //getting the id as a parameter
  const { id } = req.params;
  try {
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [id]);
    console.log(result);
    if (result.affectedRows > 0) {
      return res.json({ message: `Task with id ${id} deleted` });
    } else {
      res.status(404).json({ message: `Task with id ${id} not found` });
    }
  } catch (error) {
    console.log(error);
  }
};

//exporting the functions
module.exports = {
  getTasks,
  getTaskById,
  updateTaskById,
  createTask,
  deleteTaskById,
};
