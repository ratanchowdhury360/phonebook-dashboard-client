import React from "react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-base-200 p-6">
      {/* Header */}
      <h1 className="mb-6 text-3xl font-bold">⚙️ Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">Profile</h2>

            <div className="flex items-center gap-4 mt-4">
              <div className="avatar placeholder">
                <div className="bg-primary text-primary-content rounded-full w-16">
                  <span className="text-xl">U</span>
                </div>
              </div>
              <button className="btn btn-outline btn-sm">
                Change Avatar
              </button>
            </div>

            <div className="mt-4 space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered w-full"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="input input-bordered w-full"
              />
            </div>

            <div className="card-actions justify-end mt-4">
              <button className="btn btn-primary btn-sm">Save</button>
            </div>
          </div>
        </div>

        {/* App Preferences */}
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">Preferences</h2>

            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span>Dark Mode</span>
                <input type="checkbox" className="toggle toggle-primary" />
              </div>

              <div className="flex items-center justify-between">
                <span>Notifications</span>
                <input type="checkbox" className="toggle toggle-primary" />
              </div>

              <div className="flex items-center justify-between">
                <span>Auto Backup</span>
                <input type="checkbox" className="toggle toggle-primary" />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Language</span>
                </label>
                <select className="select select-bordered w-full">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">Security</h2>

            <div className="mt-4 space-y-3">
              <button className="btn btn-outline w-full">
                Change Password
              </button>
              <button className="btn btn-outline w-full">
                Enable Two-Factor Auth
              </button>
              <button className="btn btn-error btn-outline w-full">
                Logout
              </button>
            </div>

            <div className="divider"></div>

            <button className="btn btn-error w-full">
              Delete Account
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-sm opacity-60">
        Phone Book App v1.0 • © 2026
      </div>
    </div>
  );
};

export default Settings;
