import { React, useState, useEffect } from "react";

function Header({ task, setTask, taskData, setTaskData }) {
  const handleChange = (e) => {
    setTask((prevTask) => ({
      ...prevTask,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.taskName === "") {
      return 
    }

    setTaskData((prevTaskData) => {
      task.id = taskData.length + 1;
      return [...prevTaskData, task];
    });

    setTask((prevTask) => ({
      ...prevTask,
      id: 0,
      taskName: "",
      isDone: false,
    }));
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={task.taskName}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={handleChange}
          name="taskName"
        />
      </form>
    </header>
  );
}

export default Header;
