import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Assignments from "./pages/Assignments";
import Attendance from "./pages/Attendance";
import StudyPlanner from "./pages/StudyPlanner";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <div className={darkMode ? "dark" : ""}>
        <div className="flex">
          <Sidebar />

          <div className="flex-1 min-h-screen p-6 bg-gray-100 dark:bg-gray-900 dark:text-white">
            
            <button
              className="mb-4 px-4 py-2 bg-black text-white rounded dark:bg-white dark:text-black"
              onClick={() => setDarkMode(!darkMode)}
            >
              Toggle Dark Mode
            </button>

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/assignments" element={<Assignments />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/study" element={<StudyPlanner />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;