import { useState, useEffect } from "react";

function Attendance() {
  const [present, setPresent] = useState(() => {
    return Number(localStorage.getItem("present")) || 0;
  });

  const [total, setTotal] = useState(() => {
    return Number(localStorage.getItem("total")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("present", present);
    localStorage.setItem("total", total);
  }, [present, total]);

  const markPresent = () => {
    setPresent(present + 1);
    setTotal(total + 1);
  };

  const markAbsent = () => {
    setTotal(total + 1);
  };

  const percentage =
    total === 0 ? 0 : ((present / total) * 100).toFixed(2);

  return (
    <div className="text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Attendance</h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-96">
        <p>Total Classes: {total}</p>
        <p>Present: {present}</p>
        <p className="mb-4">Attendance %: {percentage}%</p>

        <div className="space-x-3">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            onClick={markPresent}
          >
            Present
          </button>

          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={markAbsent}
          >
            Absent
          </button>
        </div>
      </div>
    </div>
  );
}

export default Attendance;