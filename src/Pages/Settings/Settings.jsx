import React, { useEffect, useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [notifications, setNotifications] = useState(true);
  const [autoBackup, setAutoBackup] = useState(true);
  const [countryCode, setCountryCode] = useState("+1");

  // Apply theme
  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  const clearData = () => {
    localStorage.clear();
    alert("App data cleared");
  };

  return (
    <div className="min-h-screen bg-base-200 p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        ⚙️ Settings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Appearance */}
        <div className="card bg-base-100 shadow">
          <div className="card-body space-y-4">
            <h2 className="font-semibold text-lg">🎨 Appearance</h2>

            <div className="flex justify-between items-center">
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

        {/* Preferences */}
        <div className="card bg-base-100 shadow">
          <div className="card-body space-y-4">
            <h2 className="font-semibold text-lg">⚡ Preferences</h2>

            <div className="flex justify-between items-center">
              <span>Notifications</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span>Default Country Code</span>
              <select
                className="select select-bordered"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              >
                <option value="+1">🇺🇸 +1 (USA)</option>
                <option value="+44">🇬🇧 +44 (UK)</option>
                <option value="+91">🇮🇳 +91 (India)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Data & Backup */}
        <div className="card bg-base-100 shadow">
          <div className="card-body space-y-4">
            <h2 className="font-semibold text-lg">☁️ Data & Backup</h2>

            <div className="flex justify-between items-center">
              <span>Auto Backup</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={autoBackup}
                onChange={() => setAutoBackup(!autoBackup)}
              />
            </div>

            <button
              onClick={clearData}
              className="btn btn-outline btn-error"
            >
              Clear App Data
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center opacity-60 text-sm mt-8">
        PhoneBook App • v1.0.0
      </p>
    </div>
  );
};

export default Settings;
