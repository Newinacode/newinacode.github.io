import React from "react";
import { useSelector } from "react-redux";
function TaskManager() {
  const states = useSelector((state) => state);

  const table_data = Object.entries(states).map((state) => {
    if (state[1] == true) {
      return (
        <tr>
          <td>{state[0]}</td>
          <td>root</td>
          <td>7%</td>
        </tr>
      );
    }
  });
  return (
    <div className="z-40 absolute bottom-1/4 left-1/4 w-3/6 h-2/3 bg-white">
      <div className="flex justify-between  h-7 bg-white w-full p-1">
        <span>Task Manager</span>
        <img src="images/close.png" />
      </div>
      <div className="flex justify-center">
        <button className="p-2 mt-2 bg-sky-500 rounded">Processes</button>
      </div>
      <div>
        <table className="table-auto border-separate border border-slate-500 w-full mt-2">
          <thead>
            <tr>
              <th className="border border-slate-600 bg-gray-200">
                Process Name
              </th>
              <th className="border border-slate-600 bg-gray-200">User</th>
              <th className="border border-slate-600 bg-gray-200">% CPU</th>
            </tr>
          </thead>
          <tbody>{table_data}</tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskManager;
