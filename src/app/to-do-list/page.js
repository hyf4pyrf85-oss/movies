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
    if (filter === "left") {
      return !task.done;
    }

    if (filter === "completed") {
      return task.done;
    }

    return true;
  });

  return (
    <div className="container">
      <h1>To Do List</h1>

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

        <button className="button" onClick={handleAdd}>
          ADD
        </button>
      </div>

      <div className="filterButtons filters buttons">
        <button
          className={filter === "all" ? "activeFilter" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "left" ? "activeFilter" : ""}
          onClick={() => setFilter("left")}
        >
          Left
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

      {filteredTasks.map((task) => (
        <TaskCard key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </div>
  );
}
