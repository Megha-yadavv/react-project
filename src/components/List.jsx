import React, { useState } from "react";
import ItemList from "./TaskList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faBackward } from "@fortawesome/free-solid-svg-icons";
import TaskList from "./TaskList";

export default function List(props) {
  const [items, setItems] = useState("");
  const [lists, setLists] = useState([]);
  const [originalLists, setOriginalLists] = useState([]);

  /* Function to add task to list*/

  const addToList = () => {
    if (items.trim()) {
    setLists([...lists, { task: items, completed: false }]);
    setOriginalLists([...lists, { task: items, completed: false }]);
    setItems("");
  }
  };

  /* Function to search task in list */

  const searchTask = () => {
    let searchItem = items.toLowerCase();
    let tempList = [...lists];
    let filterTask = tempList.filter((task) => task.task.toLowerCase() == searchItem);
    setLists(filterTask);
    setItems("");
  };

  /* Function to return to original list after search */

  const returnToOriginal = () => {
    setLists(originalLists);
  };

  return (
    <div className="main">
      <h1>To Do List</h1>

      <div className="container">
        <button className="btn" onClick={() => returnToOriginal()}>
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <input
          type="text"
          placeholder="Add a task"
          value={items}
          onChange={(e) => setItems(e.target.value)}
        />

        <button type="submit" className="btn" onClick={addToList}>
          <FontAwesomeIcon className="adjust" icon={faPlus} />
        </button>
        <button className="btn" onClick={() => searchTask()}>
          Search
        </button>
      </div>
      <TaskList lists={lists} setLists={setLists} />
    </div>
  );
}
