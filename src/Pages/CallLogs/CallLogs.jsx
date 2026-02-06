import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";

const CallLogs = () => {
  const { data, loading } = useFetch("/mock.json");
  const [filter, setFilter] = useState("All");

  if (loading) return <p className="p-6">Loading...</p>;

  const calls =
    filter === "All"
      ? data.calls
      : data.calls.filter((c) => c.type === filter);

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">📞 Call Logs</h1>
        <select
          className="select select-bordered"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Incoming</option>
          <option>Outgoing</option>
          <option>Missed</option>
        </select>
      </div>

      <table className="table table-zebra bg-base-100">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {calls.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.number}</td>
              <td>
                <span className={`badge badge-${c.type === "Missed" ? "error" : "success"}`}>
                  {c.type}
                </span>
              </td>
              <td>{c.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CallLogs;
