import { useTasks } from "../context/TaskProvider";


const TaskCard = ({ id, title, description, done }) => {
  //console.log(title, description, done);
  const { deleteTaskContext } = useTasks();

  return (
    <li className="task">
      <h2>{title}</h2>
      <div>
        <p>{description}</p>
        {done ? "✅" : "❌"}
      </div>
      <div className="buttons-container">
        <button>EDIT</button>
        <button onClick={() => deleteTaskContext(id) }>DELETE</button>
      </div>
    </li>
  );
};

export default TaskCard;
