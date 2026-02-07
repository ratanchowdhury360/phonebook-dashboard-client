import { RiMessengerLine } from "react-icons/ri";
import { NavLink } from "react-router";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-md font-medium transition
     ${
       isActive
         ? "bg-[#1677ff]/20 text-[#1677ff]"
         : "text-gray-300 hover:bg-[#1677ff]/10 hover:text-[#1677ff]"
     }`;

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static z-50
          h-screen w-64
          bg-[#0f172a]/80 backdrop-blur-lg
          p-4 border-r border-white/10
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center gap-2">
          <RiMessengerLine className="text-3xl text-[#1677ff]" />
          <span className="text-lg font-semibold text-white hidden md:block">
            PhoneBook
          </span>
        </div>

        {/* Menu */}
        <ul className="space-y-1">
          <li>
            <NavLink to="/dashboard" className={linkClass}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/callLogs" className={linkClass}>
              Call Logs
            </NavLink>
          </li>
          <li>
            <NavLink to="/messages" className={linkClass}>
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={linkClass}>
              Settings
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
