import React, { useState } from "react";
import { Calendar, Check, X, Clock, User, UserCheck } from "lucide-react";

const Admissions = () => {
  // 🟢 State for Admissions
  const [newAdmissions, setNewAdmissions] = useState([
    { id: 1, name: "John Doe", parent: "Jane Doe", contact: "123-456-7890", scheduled: false, interactionDone: false, status: "New" },
    { id: 2, name: "Emma Smith", parent: "Robert Smith", contact: "987-654-3210", scheduled: false, interactionDone: false, status: "New" },
  ]);

  const [pendingApplications, setPendingApplications] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [studentDetails, setStudentDetails] = useState({
    dob: "",
    grade: "",
    address: "",
    primaryTeacher: "",
    secondaryTeacher: "",
  });

  // 📅 Schedule Appointment
  const scheduleAppointment = (id) => {
    setNewAdmissions((prev) =>
      prev.map((a) => (a.id === id ? { ...a, scheduled: true } : a))
    );
  };

  // ✅ Mark Interaction as Done
  const completeInteraction = (id) => {
    setNewAdmissions((prev) =>
      prev.map((a) => (a.id === id ? { ...a, interactionDone: true } : a))
    );
  };

  // ⏳ Move to Pending Applications
  const moveToPending = (id) => {
    const student = newAdmissions.find((a) => a.id === id);
    if (student) {
      setPendingApplications([...pendingApplications, student]);
      setNewAdmissions(newAdmissions.filter((a) => a.id !== id));
    }
  };

  // 🏆 Approve Student & Open Details Form
  const approveAdmission = (id) => {
    const student = pendingApplications.find((a) => a.id === id);
    if (student) {
      setSelectedStudent(student); // Open details form
      setPendingApplications(pendingApplications.filter((a) => a.id !== id));
    }
  };

  // ❌ Reject Student
  const rejectAdmission = (id) => {
    setPendingApplications(pendingApplications.filter((a) => a.id !== id));
    alert(`Admission rejected for student ID: ${id}`);
  };

  // 📝 Handle Form Input Changes
  const handleInputChange = (e) => {
    setStudentDetails({ ...studentDetails, [e.target.name]: e.target.value });
  };

  // 💾 Save Student Profile
  const saveStudentProfile = () => {
    const studentId = `STU${Date.now()}`; // Generate Unique Student ID
    const approvedStudent = {
      ...selectedStudent,
      ...studentDetails,
      studentId,
      status: "Approved",
    };

    setStudents([...students, approvedStudent]); // Add to student profiles
    setSelectedStudent(null); // Close form
    setStudentDetails({ dob: "", grade: "", address: "", primaryTeacher: "", secondaryTeacher: "" }); // Reset form
    alert(`Student Approved! ID: ${studentId}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-700">Admissions Management</h1>
      <p className="text-gray-600 mt-2">Track, schedule, and approve admissions.</p>

      {/* 📋 New Admissions Table */}
      <div className="bg-white p-6 shadow rounded-lg mt-6">
        <h2 className="text-lg font-semibold text-gray-700">New Admissions</h2>

        <table className="w-full border-collapse border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Parent</th>
              <th className="p-3 text-left">Contact</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {newAdmissions.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="p-3">{student.id}</td>
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.parent}</td>
                <td className="p-3">{student.contact}</td>
                <td className="p-3 flex gap-2">
                  {!student.scheduled ? (
                    <button
                      onClick={() => scheduleAppointment(student.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                    >
                      <Calendar size={16} className="inline-block mr-1" />
                      Schedule
                    </button>
                  ) : !student.interactionDone ? (
                    <button
                      onClick={() => completeInteraction(student.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                    >
                      <Check size={16} className="inline-block mr-1" />
                      Mark Done
                    </button>
                  ) : (
                    <button
                      onClick={() => moveToPending(student.id)}
                      className="bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600"
                    >
                      <Clock size={16} className="inline-block mr-1" />
                      Move to Pending
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ⏳ Pending Applications */}
      <div className="bg-white p-6 shadow rounded-lg mt-6">
        <h2 className="text-lg font-semibold text-gray-700">Pending Applications</h2>

        <table className="w-full border-collapse border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingApplications.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="p-3">{student.id}</td>
                <td className="p-3">{student.name}</td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => approveAdmission(student.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                  >
                    <UserCheck size={16} className="inline-block mr-1" />
                    Approve & Assign
                  </button>
                  <button
                    onClick={() => rejectAdmission(student.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    <X size={16} className="inline-block mr-1" />
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🎓 Student Details Form (Only Visible When Assigning) */}
      {selectedStudent && (
        <div className="bg-white p-6 shadow rounded-lg mt-6">
          <h2 className="text-lg font-semibold text-gray-700">Finalize Student Admission</h2>
          <input type="text" name="dob" placeholder="DOB" onChange={handleInputChange} className="border p-2 w-full mt-2" />
          <input type="text" name="grade" placeholder="Grade" onChange={handleInputChange} className="border p-2 w-full mt-2" />
          <button onClick={saveStudentProfile} className="bg-green-500 text-white px-3 py-1 rounded-md mt-3">
            Save Student
          </button>
        </div>
      )}
    </div>
  );
};

export default Admissions;
