import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-base-200 p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold">📞 Phone Book</h1>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search contact..."
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-primary">Add Contact</button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
        <div className="stat bg-base-100 shadow rounded-box">
          <div className="stat-title">Total Contacts</div>
          <div className="stat-value">128</div>
          <div className="stat-desc">↗︎ Updated today</div>
        </div>

        <div className="stat bg-base-100 shadow rounded-box">
          <div className="stat-title">Favorites</div>
          <div className="stat-value text-primary">24</div>
          <div className="stat-desc">★ Starred contacts</div>
        </div>

        <div className="stat bg-base-100 shadow rounded-box">
          <div className="stat-title">Recently Added</div>
          <div className="stat-value text-secondary">8</div>
          <div className="stat-desc">Last 7 days</div>
        </div>
      </div>

      {/* Contact List */}
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h2 className="card-title mb-4">Contacts</h2>

          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>+1 234 567 890</td>
                  <td>john@example.com</td>
                  <td className="flex gap-2">
                    <button className="btn btn-xs btn-outline">View</button>
                    <button className="btn btn-xs btn-warning">Edit</button>
                    <button className="btn btn-xs btn-error">Delete</button>
                  </td>
                </tr>

                <tr>
                  <td>Jane Smith</td>
                  <td>+44 987 654 321</td>
                  <td>jane@example.com</td>
                  <td className="flex gap-2">
                    <button className="btn btn-xs btn-outline">View</button>
                    <button className="btn btn-xs btn-warning">Edit</button>
                    <button className="btn btn-xs btn-error">Delete</button>
                  </td>
                </tr>

                <tr>
                  <td>Alex Johnson</td>
                  <td>+91 99887 77665</td>
                  <td>alex@example.com</td>
                  <td className="flex gap-2">
                    <button className="btn btn-xs btn-outline">View</button>
                    <button className="btn btn-xs btn-warning">Edit</button>
                    <button className="btn btn-xs btn-error">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination (UI only) */}
          <div className="mt-4 flex justify-end">
            <div className="join">
              <button className="join-item btn btn-sm">«</button>
              <button className="join-item btn btn-sm btn-active">1</button>
              <button className="join-item btn btn-sm">2</button>
              <button className="join-item btn btn-sm">3</button>
              <button className="join-item btn btn-sm">»</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
