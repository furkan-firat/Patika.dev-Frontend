import React, { useState } from "react";

function Main({ task, setTask, taskData, setTaskData, filter, filteredTasks }) {

  const [flag, setFlag] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (taskId) => {
    const updatedTaskData = filteredTasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });
    setTaskData(updatedTaskData);
  };

  const handleClick = (e, i) => {
    const updatedTaskData = filteredTasks.filter((task, index) => index !== i);
    setTaskData(updatedTaskData);
  };

  const selectAllTasks = () => {
    const updatedTaskData = taskData.map( (task) => ({
      ...task,
      isDone: flag
  }))
    setFlag(!flag)
    setTaskData(updatedTaskData);
    setIsChecked(!isChecked);

}

  const liItems = filteredTasks.map((task, i) => {
    return (
      <li className={task.isDone ? "completed" : ""} key={i}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={task.isDone}
            name="isDone"
            onChange={() => handleChange(task.id)}
          />
          <label>{task.taskName}</label>
          <button
            className="destroy"
            onClick={(e) => handleClick(e, i)}
          ></button>
        </div>
      </li>
    );
  });

  return (
    <section className="main">
      <input
        className=""
        type="checkbox"
        checked={isChecked}
        onChange={selectAllTasks}
      />
      <label htmlFor="toggle-all">Toggle All Tasks</label>

      <ul className="todo-list">{liItems}</ul>
    </section>
  );
}

export default Main;



