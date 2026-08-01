"use client";

import { useState } from "react";
import { TaskCard } from "./TaskCard";
import "./style.css";

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleAdd = () => {
    if (inputValue.trim() === "") return;

    const newTask = {
      id: Date.now(),
      value: inputValue,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const handleDeleteAll = () => {
    setTasks(tasks.filter((task) => !task.done));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.done;
    }

    if (filter === "completed") {
      return task.done;
    }

    return true;
  });

  const completedTasks = tasks.filter((task) => task.done).length;
  const activeTasks = tasks.filter((task) => !task.done).length;

  return (
    <div className="container">
      <h1>My Tasks</h1>

      <div className="inputRow">
        <input
          className="input"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleAdd();
            }
          }}
          placeholder="Add a task..."
        />

        <button
          className="button"
          onClick={handleAdd}
          disabled={inputValue.trim() === ""}
        >
          ➕ Add
        </button>
      </div>

      <div className="filterButtons filters">
        <button
          className={filter === "all" ? "activeFilter" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "active" ? "activeFilter" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>

        <button
          className={filter === "completed" ? "activeFilter" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>

        {filter === "completed" && (
          <button className="deleteAllButton" onClick={handleDeleteAll}>
            Delete All
          </button>
        )}
      </div>

      <div className="taskList">
        {filteredTasks.length === 0 ? (
          <div className="emptyState">
            <p>No tasks found.</p>
          </div>
        ) : (
          filteredTasks.map((task, index) => (
            <TaskCard
              key={task.id}
              number={index + 1}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))
        )}
      </div>

      <div className="stats">
        <p>
          <br />
          Total
          <br />
          {tasks.length}
        </p>

        <p>
          <br />
          Active
          <br />
          {activeTasks}
        </p>

        <p>
          <br />
          Completed
          <br />
          {completedTasks}
        </p>
      </div>
    </div>
  );
}
