import { React, useState, useEffect } from "react";
import "./ToDos.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function ToDos() {
  const [task, setTask] = useState({ id: 0, taskName: "", isDone: false });
  const [taskData, setTaskData] = useState([
    {
      id: 1,
      taskName: "Markete Git",
      isDone: false,
    },
    {
      id: 2,
      taskName: "Patika Ödevini Yap",
      isDone: true,
    },
    {
      id: 3,
      taskName: "Su iç",
      isDone: false,
    },
    {
      id: 4,
      taskName: "Temizlik Yap",
      isDone: false,
    },
  ]);

  const [filter, setFilter] = useState("all");

  

  const filteredTasks = taskData.filter((task) => {
    if (filter === "active") {
      return task.isDone === false; // Show active tasks
    } else if (filter === "completed") {
      return task.isDone === true; // Show completed tasks
    } else {
      return true; // Show all tasks
    }
    
  });
  useEffect(()=>{
    console.log(filteredTasks)

  },[filteredTasks])

  const clearCompleted = () => {
    const updatedTaskData = taskData.filter((task) => task.isDone === false);
    setTaskData(updatedTaskData);
  };

  return (
    <section className="todoapp">
      <Header
        taskData={taskData}
        setTaskData={setTaskData}
        task={task}
        setTask={setTask}
      />
      <Main
        taskData={taskData}
        setTaskData={setTaskData}
        task={task}
        setTask={setTask}
        filter={filter}
        filteredTasks={filteredTasks}
      />
      <Footer
        filteredTasks={filteredTasks}
        filter={filter}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
    </section>
  );
}

export default ToDos;
