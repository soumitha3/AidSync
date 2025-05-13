import React, { useEffect, useState } from "react";

const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulated API Call
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        // TODO: Replace with your backend API URL later
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        // Transform data (modify as per your actual backend structure)
        const formattedData = data.slice(0, 5).map((user, index) => ({
          id: user.id,
          image: `https://randomuser.me/api/portraits/men/${index + 1}.jpg`,
          name: user.name,
          grade: ["4th", "5th", "6th", "7th", "8th"][index % 5], // Mock grades
          parentName: user.username, // Replace with actual field from backend
          status: index % 2 === 0 ? "Active" : "Inactive",
          admissionDate: "10 Jan 2022", // Replace with real data later
        }));

        setStudents(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching students:", error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Student List</h2>

      {loading ? (
        <p>Loading students...</p>
      ) : (
        <table className="w-full border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Grade</th>
              <th className="p-4 text-left">Parent Name</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Admission Date</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-4">
                  <img src={student.image} alt={student.name} className="w-10 h-10 rounded-full object-cover" />
                </td>
                <td className="p-4 font-semibold">{student.name}</td>
                <td className="p-4">{student.grade}</td>
                <td className="p-4">{student.parentName}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      student.status === "Active" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
                <td className="p-4">{student.admissionDate}</td>
                <td className="p-4">
                  <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                    Actions ▼
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentsTable;
