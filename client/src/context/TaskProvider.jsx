import { useContext, useState } from "react";
import {
  getTasksRequest,
  deleteTaskRequest,
  createTaskRequest,
} from "../api/tasks.api";
import TaskContext from "./TaskContext";

// hook useTask
export const useTasks = () => {
  const context = useContext(TaskContext);

  if (context === undefined) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }
  
    return context;
};

// this is the provider that will wrap the app
export const TaskContextProvider = ({ children }) => {
  // state to store the tasks
  const [tasks, setTasks] = useState([]);

  // load the tasks from the server
  const loadTasks = async () => {
    const tasks = await getTasksRequest();
    //console.log(tasks);
    setTasks(tasks);
  }; // loadTasks

  // function to delete a task
  const deleteTaskContext = async (id) => {
    try {
      await deleteTaskRequest(id);
      const newTasks = tasks.filter((task) => task.id !== id);
      setTasks(newTasks);
    } catch (error) {
      console.log(error);
    }
  };

  // function to create a task
  const createTaskContext = async (task) => {
    try {
      const newTask = await createTaskRequest(task);
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, loadTasks, deleteTaskContext, createTaskContext }}
    >
      {children}
    </TaskContext.Provider>
  );
};
