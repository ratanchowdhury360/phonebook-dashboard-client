import { RiMessengerLine } from "react-icons/ri";
import { NavLink } from "react-router";


const Sideber = () => {
  return (
    <div className="h-screen w-64 bg-[#0f172a]/80 backdrop-blur-lg p-4 border-r border-white/10">
      
      {/* Logo */}
      <div className="mb-8 flex items-center justify-center">
        <RiMessengerLine className="text-3xl text-[#1677ff]" />
      </div>

      {/* Menu */}
      <ul className="space-y-1">
        <li className="group">
          <NavLink
            to="/dashboard"
            className="block px-4 py-2 rounded-md text-gray-300 font-medium
                       hover:bg-[#1677ff]/10 hover:text-[#1677ff] transition"
          >
            Dashboard
          </NavLink>
        </li>

        <li className="group">
          <NavLink
            to="/callLogs"
            className="block px-4 py-2 rounded-md text-gray-300 font-medium
                       hover:bg-[#1677ff]/10 hover:text-[#1677ff] transition"
          >
            Call Logs
          </NavLink>
        </li>

        <li className="group">
          <NavLink
            to="/messages"
            className="block px-4 py-2 rounded-md text-gray-300 font-medium
                       hover:bg-[#1677ff]/10 hover:text-[#1677ff] transition"
          >
            Messages
          </NavLink>
        </li>

        <li className="group">
          <NavLink
            to="/settings"
            className="block px-4 py-2 rounded-md text-gray-300 font-medium
                       hover:bg-[#1677ff]/10 hover:text-[#1677ff] transition"
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sideber;
