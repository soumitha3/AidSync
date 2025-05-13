import React, { useState } from "react";
import { Eye, Mail, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const staffMembers = [
  { id: 1, name: "John Doe", username: "smile123", email: "johndoe@example.com", role: "Teacher", students: [] },
  { id: 2, name: "Jane Smith", username: "janesmith", email: "janesmith@example.com", role: "Admin", students: [] },
];

const studentsList = [
  { id: 101, name: "Alice Johnson" },
  { id: 102, name: "Bob Williams" },
  { id: 103, name: "Charlie Brown" },
];

const Staff = () => {
  const navigate = useNavigate();
  const [staffData, setStaffData] = useState(staffMembers);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Open modal for student assignment
  const handleOpenModal = (staff) => {
    setSelectedStaff(staff);
    setSelectedStudents(staff.students || []);
    setShowModal(true);
  };

  // Handle student selection
  const toggleStudentSelection = (student) => {
    if (selectedStudents.includes(student.id)) {
      setSelectedStudents(selectedStudents.filter((id) => id !== student.id));
    } else {
      setSelectedStudents([...selectedStudents, student.id]);
    }
  };

  // Save assigned students
  const handleSaveAssignments = () => {
    setStaffData((prev) =>
      prev.map((staff) =>
        staff.id === selectedStaff.id ? { ...staff, students: selectedStudents } : staff
      )
    );
    setShowModal(false);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-700">Staff Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">+ Add Staff</button>
      </div>

      {/* Staff Directory */}
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-semibold text-gray-700">Staff Directory</h2>
        <input type="text" placeholder="Search staff..." className="mt-4 p-2 w-full border rounded-lg" />

        {/* Staff Table */}
        <table className="mt-4 min-w-full bg-white">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Username</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Students</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffData.map((staff) => (
              <tr key={staff.id} className="border-b">
                <td className="p-3">{staff.name}</td>
                <td className="p-3">{staff.username}</td>
                <td className="p-3">{staff.email}</td>
                <td className="p-3">{staff.role}</td>
                <td className="p-3">{staff.students.length} students</td>
                <td className="p-3 flex space-x-3">
                  {/* View Profile */}
                  <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200" onClick={() => navigate(`/staff/${staff.id}`)}>
                    <Eye size={18} className="text-blue-500" />
                  </button>
                  {/* Assign Students */}
                  <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200" onClick={() => handleOpenModal(staff)}>
                    <Users size={18} className="text-green-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Assign Students Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Assign Students to {selectedStaff.name}</h2>
            <ul className="max-h-40 overflow-y-auto">
              {studentsList.map((student) => (
                <li key={student.id} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedStudents.includes(student.id)}
                    onChange={() => toggleStudentSelection(student)}
                    className="mr-2"
                  />
                  {student.name}
                </li>
              ))}
            </ul>
            <div className="flex justify-end space-x-3 mt-4">
              <button className="px-4 py-2 bg-gray-300 rounded-lg" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg" onClick={handleSaveAssignments}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Staff;
