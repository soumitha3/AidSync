import React from "react";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Home, Users, ClipboardList, FileText, LogOut, Search, Bell, User } from "lucide-react";

const AdminDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-gradient-to-b from-indigo-700 to-indigo-900 text-white flex flex-col p-6 shadow-xl">
        <h2 className="text-3xl font-bold mb-8 text-center tracking-wide">Ishanya</h2>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-3">
          {[
            { name: "Dashboard", path: "/admin-dashboard/dashboard", icon: <Home size={20} /> },
            { name: "Students", path: "/admin-dashboard/students", icon: <Users size={20} /> },
            { name: "Staff", path: "/admin-dashboard/staff", icon: <ClipboardList size={20} /> },
            { name: "Admissions", path: "/admin-dashboard/admissions", icon: <FileText size={20} /> },
            { name: "Reports", path: "/admin-dashboard/reports", icon: <FileText size={20} /> },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={`flex items-center px-5 py-3 rounded-lg transition-all duration-300 ${
                location.pathname === item.path ? "bg-indigo-500 shadow-md" : "hover:bg-indigo-600"
              }`}
            >
              {item.icon}
              <span className="ml-4 text-lg font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="mt-auto">
          <button
            className="flex items-center px-5 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition-all duration-300 w-full"
            onClick={() => navigate("/")} // Redirect to homepage
          >
            <LogOut className="mr-3" size={20} />
            <span className="text-lg font-medium">Sign out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Top Navbar */}
        <header className="bg-white p-4 shadow-md flex items-center justify-between">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-64 outline-none focus:border-indigo-500"
            />
          </div>

          {/* Profile & Notifications */}
          <div className="flex items-center space-x-6">
            <Bell className="text-gray-500 cursor-pointer hover:text-indigo-500" size={24} />

            {/* Admin Profile */}
            <div className="relative cursor-pointer" onClick={() => navigate("/admin-dashboard/profile")}>
              <User className="text-gray-600 hover:text-indigo-500" size={24} />
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="p-6 overflow-auto h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
