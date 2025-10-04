// App.jsx
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";


export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: (
            <Home
              tasks={tasks}
              newTask={newTask}
              setNewTask={setNewTask}
              addTask={addTask}
            />
          ),
        },
        { path: "signup", element: <Signup /> },
        { path: "login", element: <Login /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
