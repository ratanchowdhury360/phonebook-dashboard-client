import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";

const CallLogs = () => {
  const { data, loading } = useFetch("/mock.json");
  const [filter, setFilter] = useState("All");

  if (loading) {
    return <p className="p-6 text-center">Loading...</p>;
  }

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
    <div className="min-h-screen bg-base-200 p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">📞 Call Logs</h1>

        <select
          className="select select-bordered w-full sm:w-48"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Incoming</option>
          <option>Outgoing</option>
          <option>Missed</option>
        </select>
      </div>

      {/* ===== MOBILE VIEW (Cards) ===== */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {calls.map((c) => (
          <div key={c.id} className="card bg-base-100 shadow">
            <div className="card-body p-4">
              <div className="flex justify-between items-start">
                <h2 className="font-semibold text-lg">
                  {c.name}
                </h2>
                <span className={`badge ${badgeColor(c.type)}`}>
                  {c.type}
                </span>
              </div>

              <p className="text-sm opacity-70">{c.number}</p>

              <div className="mt-2 text-sm space-y-1">
                <p>🕒 Duration: {c.duration}</p>
                <p>📅 {new Date(c.date).toLocaleString()}</p>
                {c.network && <p>📡 Network: {c.network}</p>}
                {c.country && <p>🌍 Country: {c.country}</p>}
              </div>

              {c.spamSuspected && (
                <span className="badge badge-warning mt-2 w-fit">
                  ⚠️ Spam Suspected
                </span>
              )}
            </div>
          </div>
        ))}

        {calls.length === 0 && (
          <p className="text-center opacity-60">No call logs found</p>
        )}
      </div>

      {/* ===== TABLET & DESKTOP VIEW (Table) ===== */}
      <div className="hidden md:block card bg-base-100 shadow">
        <div className="card-body overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Number</th>
                <th>Type</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Extras</th>
              </tr>
            </thead>
            <tbody>
              {calls.map((c) => (
                <tr key={c.id}>
                  <td className="font-medium">{c.name}</td>
                  <td>{c.number}</td>
                  <td>
                    <span className={`badge ${badgeColor(c.type)}`}>
                      {c.type}
                    </span>
                  </td>
                  <td>{c.duration}</td>
                  <td>{new Date(c.date).toLocaleString()}</td>
                  <td className="space-x-2">
                    {c.network && (
                      <span className="badge badge-outline">
                        📡 {c.network}
                      </span>
                    )}
                    {c.spamSuspected && (
                      <span className="badge badge-warning">
                        Spam
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {calls.length === 0 && (
            <p className="text-center opacity-60 py-6">
              No call logs found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallLogs;
