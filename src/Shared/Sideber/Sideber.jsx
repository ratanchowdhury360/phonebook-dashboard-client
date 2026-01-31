import React from 'react';
import { RiMessengerLine } from 'react-icons/ri';
import { NavLink } from 'react-router';

const Sideber = () => {
    return (
        <div className="bg-gray-100 h-screen p-3 sm:p-4 overflow-y-auto">
            <div className="mb-6 pb-4 pl-9 pt-2 sm:pt-4">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800"><RiMessengerLine /></h2>
            </div>

            <div>
                <ul className="space-y-3">
                    <li className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer">
                       <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer">
                        <NavLink to="/contacts">Call Logs</NavLink>
                    </li>
                    <li className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer">
                        <NavLink to="/messages">Appointments</NavLink>
                    </li>
                    <li className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer">
                        <NavLink to="/settings">Settings</NavLink>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Sideber;