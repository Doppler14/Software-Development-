import "./input.css";
import React, { useState } from "react";

// Main App component
function App() {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to store the current task input
  const [input, setInput] = useState("");

  // Handle adding a new task
  const addTask = () => {
    if (input) {
      setTasks([...tasks, { text: input, isEditing: false }]);
      setInput("");
    }
  };

  // Handle deleting a task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Handle editing a task
  const editTask = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        task.isEditing = true;
      }
      return task;
    });
    setTasks(newTasks);
  };

  // Handle updating a task
  const updateTask = (index, text) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        task.text = text;
        task.isEditing = false;
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-yellow-500">
          To-Do List
        </h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow p-2 border border-gray-300 rounded-l"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
          />
          <button
            className="bg-yellow-500 text-white p-2 rounded-r"
            onClick={addTask}
          >
            Add
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between mb-2 p-2 bg-pink-200 rounded"
            >
              {task.isEditing ? (
                <input
                  type="text"
                  className="flex-grow p-2 border border-gray-300"
                  defaultValue={task.text}
                  onBlur={(e) => updateTask(index, e.target.value)}
                />
              ) : (
                <span className="flex-grow">{task.text}</span>
              )}
              <button
                className="bg-yellow-500 text-white p-1 rounded ml-2"
                onClick={() => editTask(index)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white p-1 rounded ml-2"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
