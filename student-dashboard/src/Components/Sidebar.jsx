import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClass =
    "block py-2 px-4 rounded hover:bg-gray-700 transition";

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5 dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-8">🎓 Student App</h2>

      <nav className="space-y-3">
        <NavLink to="/" className={linkClass}>Dashboard</NavLink>
        <NavLink to="/assignments" className={linkClass}>Assignments</NavLink>
        <NavLink to="/attendance" className={linkClass}>Attendance</NavLink>
        <NavLink to="/study" className={linkClass}>Study Planner</NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;