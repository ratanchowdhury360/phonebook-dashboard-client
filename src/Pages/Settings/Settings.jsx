import React, { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <h1 className="text-3xl font-bold mb-6">⚙️ Settings</h1>

      <div className="card bg-base-100 shadow w-full md:w-1/3">
        <div className="card-body space-y-4">
          <div className="flex justify-between">
            <span>Dark Mode</span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </div>

          <div className="flex justify-between">
            <span>Notifications</span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
