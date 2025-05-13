import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Contact from "./components/Contact";
import ParentDashboard from "./pages/ParentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Dashboard from "./pages/Dashboard";  
import Students from "./pages/Students";  
import StudentProfile from "./pages/StudentProfile";  // Import Student Profile
import Staff from "./pages/Staff";        
import Admissions from "./pages/Admissions";  
import Reports from "./pages/Reports";    
import Login from "./components/Login";
import ApplyNow from "./components/ApplyNow";
import JobApplication from "./pages/JobApplication";
import ChildRegistration from "./pages/ChildRegistration";
import AdminProfile from "./pages/AdminProfile";  

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole") || null);

  // Update localStorage when userRole changes
  useEffect(() => {
    if (userRole) {
      localStorage.setItem("userRole", userRole);
    } else {
      localStorage.removeItem("userRole");
    }
  }, [userRole]);

  // Hide Navbar on certain pages
  const pagesWithoutNavbar = [
    "/login",
    "/apply-now",
    "/job-application",
    "/child-registration",
    "/parent-dashboard",
    "/teacher-dashboard",
  ];
  const showNavbar = !pagesWithoutNavbar.includes(location.pathname) && !location.pathname.startsWith("/admin-dashboard");

  return (
    <div className="bg-blue-50 min-h-screen">
      {showNavbar && <Navbar />}

      <Routes>
        {/* 🌟 Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <MissionSection />
              <Programs />
              <Testimonials />
              <Team />
              <Contact />
            </>
          }
        />

        {/* 🚀 Role-Based Dashboard Routes */}
        <Route path="/parent-dashboard" element={userRole === "Parent" ? <ParentDashboard /> : <Navigate to="/login" />} />
        <Route path="/teacher-dashboard" element={userRole === "Teacher" ? <TeacherDashboard /> : <Navigate to="/login" />} />

        {/* ✅ Admin Dashboard with Nested Routes */}
        {userRole === "Admin" ? (
          <Route path="/admin-dashboard/*" element={<AdminDashboard />}>
            <Route index element={<Navigate to="dashboard" />} />  {/* Default route to Dashboard */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="students" element={<Students />} />
            <Route path="students/:id" element={<StudentProfile />} />  {/* Student Profile Page */}
            <Route path="staff" element={<Staff />} />
            <Route path="admissions" element={<Admissions />} />
            <Route path="reports" element={<Reports />} />
            <Route path="profile" element={<AdminProfile />} />  {/* Admin Profile Page */}
          </Route>
        ) : (
          <Route path="/admin-dashboard/*" element={<Navigate to="/login" />} />
        )}

        {/* 🔐 Login - Pass setUserRole for authentication */}
        <Route path="/login" element={<Login setUserRole={setUserRole} />} />

        {/* 📌 Forms & Applications */}
        <Route path="/apply-now" element={<ApplyNow />} />
        <Route path="/job-application" element={<JobApplication />} />
        <Route path="/child-registration" element={<ChildRegistration />} />

        {/* 🚫 Catch-all Route (Optional) */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
