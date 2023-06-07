import React, { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

const TaskPage = () => {
  
  const {tasks, loadTasks} = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);


  return (
    <div>

      <h1>Tasks</h1>
      {tasks.length === 0 ? (
        <p>There are no tasks</p>
      ) : (
        <ul className="tasks">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              done={task.done}
            />
          ))}
        </ul>
      )}
      
    </div>
  );
};

export default TaskPage;
