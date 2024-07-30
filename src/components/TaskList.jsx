import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function TaskList({ lists, setLists }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [newTask, setNewTask] = useState("");

  /* Function to toggle task completion */
  const completeTask = (index) => {
    const updatedList = lists.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setLists(updatedList);
  };

  /* Function to delete a task from the list */
  const deleteFromList = (index) => {
    const updatedList = lists.filter((_, i) => i !== index);
    setLists(updatedList);
  };

  /* Function to start editing a task */
  const startEditing = (index) => {
    setEditingIndex(index);
    setNewTask(lists[index].task);
  };

  /* Function to handle changes to the task input */
  const handleEditChange = (e) => {
    setNewTask(e.target.value);
  };

  /* Function to save the edited task */
  const saveTask = (index) => {
    const updatedList = lists.map((item, i) =>
      i === index ? { ...item, task: newTask } : item
    );
    setLists(updatedList);
    setEditingIndex(null);
    setNewTask("");
  };

  return (
    <div className="list-style">
      <ul>
        {lists.map((item, i) => (
          <div className="box" key={i}>
            <li>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => completeTask(i)}
              />
              {editingIndex === i ? (
                <input
                  type="text"
                  value={newTask}
                  onChange={handleEditChange}
                />
              ) : (
                <span style={{ textDecoration: item.completed ? "line-through" : "none" }}>
                  {item.task}
                </span>
              )}
            </li>
            <button className="icons" onClick={() => deleteFromList(i)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
            {editingIndex === i ? (
              <button className="icons" onClick={() => saveTask(i)}>
                Save
              </button>
            ) : (
              <button className="icons" onClick={() => startEditing(i)}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}