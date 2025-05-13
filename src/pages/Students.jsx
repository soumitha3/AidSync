import React from "react";
import { Plus, FileText, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Students = () => {
  const navigate = useNavigate();

  // Dummy data for students
  const students = [
    { id: "S001", name: "John Doe", parentName: "Jane Doe", contact: "9876543210" },
    { id: "S002", name: "Emma Smith", parentName: "Robert Smith", contact: "8765432109" },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-semibold">Students</h1>
          <p className="text-gray-500">Home / Students</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700">
            <Plus size={18} className="mr-2" /> Add Student
          </button>
          <button className="flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-300">
            <FileText size={18} className="mr-2" /> Export
          </button>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-gray-100 p-4 rounded-md flex items-center justify-between mb-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search students..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Student ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Parent Name</th>
              <th className="p-3 text-left">Contact</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="p-3">{student.id}</td>
                  <td className="p-3">{student.name}</td>
                  <td className="p-3">{student.parentName}</td>
                  <td className="p-3">{student.contact}</td>
                  <td className="p-3">
                    <button
                      className="bg-blue-600 text-white px-3 py-1 rounded-md shadow-md hover:bg-blue-700"
                      onClick={() => navigate(`/admin-dashboard/students/${student.id}`)}
                    >
                      View Profile
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No students found. Add a student to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <p className="text-gray-500 text-sm mt-4">
        Showing {students.length} of {students.length} students
      </p>
    </div>
  );
};

export default Students;
