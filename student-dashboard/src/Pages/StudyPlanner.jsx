import { useState, useEffect } from "react";

function StudyPlanner() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("studyTasks");
    return saved ? JSON.parse(saved) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("studyTasks", JSON.stringify(tasks));
  }, [tasks]);

  
  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  
  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Study Planner</h1>

    
      <div className="flex gap-2 mb-6">
        <input
          className="border p-2 rounded w-full 
                     bg-white text-black 
                     dark:bg-gray-700 dark:text-white 
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter study task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          className="bg-blue-500 text-white px-4 rounded"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      
      <ul className="space-y-3">
        {tasks.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded shadow"
          >
            <span
              className={
                t.completed ? "line-through text-gray-400" : ""
              }
            >
              {t.text}
            </span>

            <div className="flex gap-2">
              <button
                className="bg-green-500 text-white px-3 rounded"
                onClick={() => toggleTask(index)}
              >
                ✔
              </button>

              <button
                className="bg-red-500 text-white px-3 rounded"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudyPlanner;