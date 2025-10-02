import { useState } from 'react'
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";


export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <div >
      <Home />
    </div>
  );
}