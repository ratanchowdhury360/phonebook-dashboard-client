import React from "react";

const Navbar = ({ onMenuClick }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-2 sm:px-4 flex justify-between">
      {/* Hamburger for mobile */}
      <button
        className="btn btn-ghost md:hidden"
        onClick={onMenuClick}
      >
        ☰
      </button>

      <a className="text-lg sm:text-xl font-semibold">
        Dashboard Overview
      </a>

      {/* Right side: avatar + cart/notification */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Cart / Notification */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">9</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Avatar */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-9 sm:w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge badge-primary badge-sm">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a className="text-error">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
