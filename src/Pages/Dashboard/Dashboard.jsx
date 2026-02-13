import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";

const Dashboard = () => {
  const { data, loading } = useFetch("/mock.json");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  if (loading) return <p className="p-6 text-center">Loading...</p>;

  const contacts = data?.contacts?.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-base-200 p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📇 Contacts</h1>

        <div className="flex gap-3">
          <input
            className="input input-bordered"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-primary">+ Add</button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {contacts.map((c) => (
          <div
            key={c.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition cursor-pointer"
            onClick={() => setSelected(c)}
          >
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="card-title">
                  {c.name}
                  {c.favorite && <span className="text-warning">★</span>}
                </h2>
              </div>

              <p className="text-sm opacity-70">
                {c.jobTitle} @ {c.company}
              </p>

              <div className="mt-3 space-y-1 text-sm">
                <p>📞 {c.phone}</p>
                <p>✉️ {c.email}</p>
                <p>📍 {c.address.city}, {c.address.country}</p>
              </div>

              <div className="card-actions justify-end mt-4">
                <a href={`tel:${c.phone}`} className="btn btn-sm btn-success">
                  Call
                </a>
                <a
                  href={`mailto:${c.email}`}
                  className="btn btn-sm btn-info"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{selected.name}</h3>
            <p className="py-1">{selected.jobTitle}</p>
            <p>Company: {selected.company}</p>
            <p>Website: {selected.website}</p>
            <p>Birthday: {selected.birthday}</p>
            <p>Notes: {selected.notes}</p>

            <div className="modal-action">
              <button className="btn" onClick={() => setSelected(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
