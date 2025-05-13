import React from "react";
import { useNavigate } from "react-router-dom";

const adminProfile = {
  name: "Admin User",
  email: "admin@example.com",
  role: "Administrator",
  phone: "+1 234 567 890",
};

const AdminProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <button className="mb-4 bg-gray-200 px-4 py-2 rounded-lg" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold">{adminProfile.name}'s Profile</h1>
        <p><strong>Email:</strong> {adminProfile.email}</p>
        <p><strong>Role:</strong> {adminProfile.role}</p>
        <p><strong>Phone:</strong> {adminProfile.phone}</p>
      </div>
    </div>
  );
};

export default AdminProfile;
