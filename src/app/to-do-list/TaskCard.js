"use client";

import { useState } from "react";

export function TaskCard(props) {
  const { task, tasks, setTasks, number } = props;

  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(task.value);

  const handleEdit = () => {
    if (!isEdit) {
      setIsEdit(true);
      return;
    }

    const updatedTasks = tasks.map((value) => {
      if (value.id === task.id) {
        return {
          ...value,
          value: editValue,
        };
      }

      return value;
    });

    setTasks(updatedTasks);
    setIsEdit(false);
  };

  const handleCompleted = () => {
    const updatedTasks = tasks.map((value) => {
      if (value.id === task.id) {
        return {
          ...value,
          done: !value.done,
        };
      }

      return value;
    });

    setTasks(updatedTasks);
  };

  const handleDelete = () => {
    const filteredTasks = tasks.filter((value) => value.id !== task.id);

    setTasks(filteredTasks);
  };

  return (
    <div className="task">
      <div className="taskLeft">
        <div className={task.done ? "statusCircle done" : "statusCircle"}></div>

        {isEdit ? (
          <input
            className="editInput"
            value={editValue}
            onChange={(event) => {
              setEditValue(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleEdit();
              }
            }}
          />
        ) : (
          <span className={task.done ? "completed" : ""}>
            {number}. {task.value}
          </span>
        )}
      </div>

      <div className="buttons">
        {!task.done && (
          <button className="editButton" onClick={handleEdit}>
            Edit
          </button>
        )}

        <button className="doneButton" onClick={handleCompleted}>
          {task.done ? "↩ Undo" : "Completed"}
        </button>

        <button className="deleteButton" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
