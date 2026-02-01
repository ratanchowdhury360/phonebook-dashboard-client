import React from "react";

const CallLogs = () => {
  return (
    <div className="min-h-screen bg-base-200 p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold">📞 Call Logs</h1>

        <div className="flex gap-2">
          <select className="select select-bordered">
            <option>All Calls</option>
            <option>Incoming</option>
            <option>Outgoing</option>
            <option>Missed</option>
          </select>

          <input
            type="text"
            placeholder="Search number or name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 mb-6">
        <div className="stat bg-base-100 shadow rounded-box">
          <div className="stat-title">Total Calls</div>
          <div className="stat-value">342</div>
        </div>

        <div className="stat bg-base-100 shadow rounded-box">
          <div className="stat-title">Incoming</div>
          <div className="stat-value text-success">180</div>
        </div>

        <div className="stat bg-base-100 shadow rounded-box">
          <div className="stat-title">Outgoing</div>
          <div className="stat-value text-info">120</div>
        </div>

        <div className="stat bg-base-100 shadow rounded-box">
          <div className="stat-title">Missed</div>
          <div className="stat-value text-error">42</div>
        </div>
      </div>

      {/* Call Log List */}
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h2 className="card-title mb-4">Recent Calls</h2>

          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Contact</th>
                  <th>Number</th>
                  <th>Type</th>
                  <th>Duration</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>+1 234 567 890</td>
                  <td>
                    <span className="badge badge-success">Incoming</span>
                  </td>
                  <td>05:32</td>
                  <td>Today, 10:24 AM</td>
                  <td className="flex gap-2">
                    <button className="btn btn-xs btn-outline">Call</button>
                    <button className="btn btn-xs btn-error">Delete</button>
                  </td>
                </tr>

                <tr>
                  <td>Jane Smith</td>
                  <td>+44 987 654 321</td>
                  <td>
                    <span className="badge badge-info">Outgoing</span>
                  </td>
                  <td>02:15</td>
                  <td>Yesterday, 6:40 PM</td>
                  <td className="flex gap-2">
                    <button className="btn btn-xs btn-outline">Call</button>
                    <button className="btn btn-xs btn-error">Delete</button>
                  </td>
                </tr>

                <tr>
                  <td>Unknown</td>
                  <td>+91 99887 77665</td>
                  <td>
                    <span className="badge badge-error">Missed</span>
                  </td>
                  <td>—</td>
                  <td>Jan 29, 9:10 AM</td>
                  <td className="flex gap-2">
                    <button className="btn btn-xs btn-primary">
                      Save Contact
                    </button>
                    <button className="btn btn-xs btn-error">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
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

export default CallLogs;
