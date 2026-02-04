import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const Dashboard = () => {
  const { data, loading } = useFetch("/mock.json");
  const [search, setSearch] = useState("");

  if (loading) return <p className="p-6">Loading...</p>;

  const filteredContacts = data.contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">📞 Phone Book</h1>

        <input
          className="input input-bordered"
          placeholder="Search contact..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((c) => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>{c.phone}</td>
                  <td>{c.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
