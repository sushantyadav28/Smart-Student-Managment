import { useState, useEffect } from "react";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";

function Assignments() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  
  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  
  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  
  const editTask = (index) => {
    const newText = prompt("Edit your task:", tasks[index].text);
    if (!newText) return;

    const updated = [...tasks];
    updated[index].text = newText;
    setTasks(updated);
  };

  return (
    <div className="p-6 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Assignments</h1>

    
      <div className="flex gap-2 mb-6">
        <input
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter assignment"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded transition"
          onClick={addTask}
        >
          Add
        </button>
      </div>


      <ul className="space-y-3">
        {tasks.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-md transition"
          >
            <span
              className={`text-lg ${
                t.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {t.text}
            </span>

            <div className="flex gap-2">
      
              <button
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded transition"
                onClick={() => toggleComplete(index)}
              >
                <FaCheck />
              </button>

            
              <button
                className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded transition"
                onClick={() => editTask(index)}
              >
                <FaEdit />
              </button>

    
              <button
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded transition"
                onClick={() => deleteTask(index)}
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignments;