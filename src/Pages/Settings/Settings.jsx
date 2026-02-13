import React, { useEffect, useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [autoBackup, setAutoBackup] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <h1 className="text-3xl font-bold mb-6">⚙️ Settings</h1>

      <div className="grid md:grid-cols-2 gap-6">
        
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="font-semibold text-lg">Appearance</h2>

            <div className="flex justify-between mt-4">
              <span>Dark Mode</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="font-semibold text-lg">
              Backup & Security
            </h2>

            <div className="flex justify-between mt-4">
              <span>Auto Backup</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={autoBackup}
                onChange={() => setAutoBackup(!autoBackup)}
              />
            </div>

            <button className="btn btn-outline btn-error mt-4">
              Clear App Data
            </button>
          </div>
        </div>
      </div>

      <p className="text-center mt-10 opacity-60">
        PhoneBook App • v2.0
      </p>
    </div>
  );
};

export default Settings;
