import React from "react";

function Footer({
  task,
  setTask,
  taskData,
  setTaskData,
  filteredTasks,
  filter,
  setFilter,
  clearCompleted,
}) {
  const handleAllClick = () => setFilter("all");
  const handleActiveClick = () => setFilter("active");
  const handleCompletedClick = () => setFilter("completed");

  const hasCompletedTasks = filteredTasks.some((task) => task.isDone === true);


  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{filteredTasks.length} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={handleAllClick}
            className={filter === "all" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={handleActiveClick}
            className={filter === "active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={handleCompletedClick}
            className={filter === "completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>

      {hasCompletedTasks && (
        <button className="clear-completed" onClick={clearCompleted}>
          {"Clear completed"}
        </button>
      )}
    </footer>
  );
}

export default Footer;
