import "./App.css";
import { Routes, Route } from "react-router-dom";
import TaskPage from "./pages/taskPage";
import NotFoundPage from "./pages/NotFoundPage";
import TaskForm from "./pages/TaskForm";
import NavBar from "./components/Navbar";
import { TaskContextProvider } from "./context/TaskProvider";

function App() {
  return (
    <TaskContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/new" element={<TaskForm/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </TaskContextProvider>
  );
}

export default App;
