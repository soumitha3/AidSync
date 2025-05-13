import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const StudentProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy student data (In real case, fetch from backend)
  const students = {
    S001: { id: "S001", name: "John Doe", parentName: "Jane Doe", contact: "9876543210", grade: "5", gender: "Male", admissionDate: "2023-05-10" },
    S002: { id: "S002", name: "Emma Smith", parentName: "Robert Smith", contact: "8765432109", grade: "6", gender: "Female", admissionDate: "2022-07-15" },
  };

  const student = students[id];

  if (!student) {
    return <p className="text-center text-red-500 mt-6">Student not found.</p>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-center">Student Profile</h2>
      <p className="text-gray-500 text-center mb-4">ID: {student.id}</p>
      
      <div className="grid grid-cols-2 gap-4">
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Parent Name:</strong> {student.parentName}</p>
        <p><strong>Contact:</strong> {student.contact}</p>
        <p><strong>Grade:</strong> {student.grade}</p>
        <p><strong>Gender:</strong> {student.gender}</p>
        <p><strong>Admission Date:</strong> {student.admissionDate}</p>
      </div>

      <button 
        className="mt-6 w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700"
        onClick={() => navigate("/admin-dashboard/students")}
      >
        Back to Students
      </button>
    </div>
  );
};

export default StudentProfile;
