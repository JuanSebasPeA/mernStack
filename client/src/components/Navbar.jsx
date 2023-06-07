import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <h1>TASK LIST</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Create task</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
