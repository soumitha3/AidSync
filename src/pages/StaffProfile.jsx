import React from "react";
import { useParams } from "react-router-dom";

const staffMembers = [
  { id: 1, name: "John Doe", username: "smile123", email: "johndoe@example.com", role: "Teacher", students: [101, 103] },
  { id: 2, name: "Jane Smith", username: "janesmith", email: "janesmith@example.com", role: "Admin", students: [] },
];

const studentsList = [
  { id: 101, name: "Alice Johnson" },
  { id: 102, name: "Bob Williams" },
  { id: 103, name: "Charlie Brown" },
];

const StaffProfile = () => {
  const { id } = useParams();
  const staff = staffMembers.find((s) => s.id === parseInt(id));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{staff.name}'s Profile</h1>
      <p><strong>Email:</strong> {staff.email}</p>
      <p><strong>Role:</strong> {staff.role}</p>

      <h2 className="text-xl font-bold mt-4">Assigned Students</h2>
      <ul>
        {studentsList.filter((s) => staff.students.includes(s.id)).map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StaffProfile;
