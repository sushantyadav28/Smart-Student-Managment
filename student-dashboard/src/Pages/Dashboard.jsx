import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const [taskCount, setTaskCount] = useState(0);
  const [attendance, setAttendance] = useState(0);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTaskCount(tasks.length);

    const present = Number(localStorage.getItem("present")) || 0;
    const total = Number(localStorage.getItem("total")) || 0;

    const percent =
      total === 0 ? 0 : ((present / total) * 100).toFixed(2);

    setAttendance(percent);
  }, []);

  const data = [
    { name: "Assignments", value: taskCount },
    { name: "Attendance %", value: Number(attendance) },
  ];

  return (
    <div className="text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 p-5 rounded shadow">
          <h2 className="text-lg font-semibold">Assignments</h2>
          <p className="text-2xl">{taskCount}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded shadow">
          <h2 className="text-lg font-semibold">Attendance</h2>
          <p className="text-2xl">{attendance}%</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded shadow">
          <h2 className="text-lg font-semibold">Tasks</h2>
          <p className="text-2xl">{taskCount}</p>
        </div>
      </div>

      
      <div className="bg-white dark:bg-gray-800 p-5 rounded shadow h-80">
        <h2 className="text-xl font-bold mb-4">Overview</h2>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;