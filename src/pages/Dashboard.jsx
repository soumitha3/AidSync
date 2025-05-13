import React from "react";
import { Users, ClipboardCheck, Activity, Bell, MessageCircle, BarChart3 } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* 🏠 Header */}
      <h1 className="text-2xl font-bold text-gray-700">Admin Dashboard</h1>
      <p className="text-gray-600">Welcome back! Here's an overview of recent activity.</p>

      {/* 📌 Overview Cards */}
      <div className="grid grid-cols-4 gap-6 mt-6">
        {/* Total Users */}
        <div className="bg-white p-6 shadow-md rounded-lg flex items-center">
          <div className="bg-blue-500 text-white p-3 rounded-full">
            <Users size={24} />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">Total Users</p>
            <h3 className="text-xl font-bold">450</h3>
          </div>
        </div>

        {/* New Admissions */}
        <div className="bg-white p-6 shadow-md rounded-lg flex items-center">
          <div className="bg-green-500 text-white p-3 rounded-full">
            <ClipboardCheck size={24} />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">New Admissions</p>
            <h3 className="text-xl font-bold">35</h3>
          </div>
        </div>

        {/* System Activity */}
        <div className="bg-white p-6 shadow-md rounded-lg flex items-center">
          <div className="bg-orange-500 text-white p-3 rounded-full">
            <Activity size={24} />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">Active Users</p>
            <h3 className="text-xl font-bold">120</h3>
          </div>
        </div>

        {/* Pending Requests */}
        <div className="bg-white p-6 shadow-md rounded-lg flex items-center">
          <div className="bg-red-500 text-white p-3 rounded-full">
            <Bell size={24} />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">Pending Requests</p>
            <h3 className="text-xl font-bold">8</h3>
          </div>
        </div>
      </div>

      {/* 📊 Analytics & Logs */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        {/* Announcements & Notifications */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">📢 Announcements</h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>🎉 New semester starts next month!</li>
            <li>📢 Faculty meeting scheduled for Friday.</li>
            <li>🚀 System maintenance on Sunday at 2 AM.</li>
          </ul>
        </div>

        {/* Recent Activity Log */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">⚡ Recent Activity</h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✅ Admin approved 5 new admissions.</li>
            <li>❌ 2 applications were rejected.</li>
            <li>🛠️ System backup completed.</li>
            <li>👥 15 users logged in today.</li>
          </ul>
        </div>
      </div>

      {/* 📈 Quick Stats & Graphs Placeholder */}
      <div className="bg-white p-6 shadow-md rounded-lg mt-6 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-700">📊 System Performance</h2>
        <BarChart3 size={48} className="text-gray-500" />
        <p className="text-gray-600">Everything is running smoothly! ✅</p>
      </div>
    </div>
  );
};

export default Dashboard;
