import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";

const Dashboard = () => {
  const { data, loading } = useFetch("/mock.json");
  const [search, setSearch] = useState("");

  if (loading) {
    return <p className="p-6 text-center">Loading...</p>;
  }

  const contacts = data?.contacts?.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-base-200 p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">📞 Phone Book</h1>
        <input
          className="input input-bordered w-full sm:w-72"
          placeholder="Search contact..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ===== MOBILE VIEW (Cards) ===== */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {contacts.map((c) => (
          <div key={c.id} className="card bg-base-100 shadow">
            <div className="card-body p-4">
              <div className="flex justify-between items-start">
                <h2 className="card-title text-lg">
                  {c.name}
                  {c.favorite && <span className="ml-2 text-warning">★</span>}
                </h2>
              </div>

              <p className="text-sm opacity-70">
                {c.jobTitle} @ {c.company}
              </p>

              <div className="mt-2 space-y-1 text-sm">
                <p>📞 {c.phone}</p>
                <p>✉️ {c.email}</p>
                <p>
                  📍 {c.address.city}, {c.address.country}
                </p>
              </div>

              <p className="text-xs opacity-60 mt-2">
                Last contacted:{" "}
                {new Date(c.lastContacted).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}

        {contacts.length === 0 && (
          <p className="text-center opacity-60">No contacts found</p>
        )}
      </div>

      {/* ===== TABLET & DESKTOP VIEW (Table) ===== */}
      <div className="hidden md:block card bg-base-100 shadow">
        <div className="card-body overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Location</th>
                <th>Last Contacted</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr key={c.id}>
                  <td className="font-medium">
                    {c.name}
                    {c.favorite && (
                      <span className="ml-2 text-warning">★</span>
                    )}
                  </td>
                  <td>
                    <div className="text-sm font-medium">{c.company}</div>
                    <div className="text-xs opacity-60">{c.jobTitle}</div>
                  </td>
                  <td>{c.phone}</td>
                  <td>{c.email}</td>
                  <td>
                    {c.address.city}, {c.address.country}
                  </td>
                  <td>
                    {new Date(c.lastContacted).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {contacts.length === 0 && (
            <p className="text-center opacity-60 py-6">
              No contacts found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
