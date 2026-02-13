import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";

const CallLogs = () => {
  const { data, loading } = useFetch("/mock.json");
  const [filter, setFilter] = useState("All");

  if (loading) return <p className="p-6 text-center">Loading...</p>;

  const calls =
    filter === "All"
      ? data?.calls
      : data?.calls.filter((c) => c.type === filter);

  const badgeColor = (type) => {
    if (type === "Missed") return "badge-error";
    if (type === "Incoming") return "badge-success";
    if (type === "Outgoing") return "badge-info";
    return "badge-ghost";
  };

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">📞 Call Logs</h1>

        <select
          className="select select-bordered"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Incoming</option>
          <option>Outgoing</option>
          <option>Missed</option>
        </select>
      </div>

      <div className="space-y-4">
        {calls.map((c) => (
          <div
            key={c.id}
            className="card bg-base-100 shadow hover:shadow-lg transition"
          >
            <div className="card-body flex flex-row justify-between items-center">
              <div>
                <h2 className="font-semibold">{c.name}</h2>
                <p className="text-sm opacity-70">{c.number}</p>
                <p className="text-xs">
                  {new Date(c.date).toLocaleString()}
                </p>
              </div>

              <div className="text-right space-y-2">
                <span className={`badge ${badgeColor(c.type)}`}>
                  {c.type}
                </span>
                <div>
                  <a
                    href={`tel:${c.number}`}
                    className="btn btn-sm btn-primary mt-2"
                  >
                    Call Back
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallLogs;
