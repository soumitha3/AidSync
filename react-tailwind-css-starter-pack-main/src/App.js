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
import Login from "./components/Login";
import ApplyNow from "./components/ApplyNow";
import JobApplication from "./pages/JobApplication";
import ChildRegistration from "./pages/ChildRegistration";

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
  const [userRole, setUserRole] = useState(null);

  // Check local storage for saved role (after login)
  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    if (storedRole) {
      setUserRole(storedRole);
    }
  }, []);

  // Show Navbar only on the homepage
  const pagesWithoutNavbar = ["/login", "/apply-now", "/job-application", "/child-registration"];
  const showNavbar = location.pathname === "/" && !pagesWithoutNavbar.includes(location.pathname);

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* ✅ FIXED Navbar at the top */}
      {showNavbar && <Navbar />}
      
      <Routes>
        {/* 🌟 Homepage */}
        <Route path="/" element={
          <>
            <Hero />
            <MissionSection />
            <Programs />
            <Testimonials />
            <Team />
            <Contact />
          </>
        }/>

        {/* 🚀 Protected Dashboard Routes */}
        <Route path="/parent-dashboard" element={userRole === "Parent" ? <ParentDashboard /> : <Navigate to="/login" />} />
        <Route path="/teacher-dashboard" element={userRole === "Teacher" ? <TeacherDashboard /> : <Navigate to="/login" />} />
        <Route path="/admin-dashboard" element={userRole === "Admin" ? <AdminDashboard /> : <Navigate to="/login" />} />

        {/* 🔐 Login - Pass setUserRole so it updates on login */}
        <Route path="/login" element={<Login setUserRole={setUserRole} />} />

        {/* 📌 Apply Now & Job Applications */}
        <Route path="/apply-now" element={<ApplyNow />} />
        <Route path="/job-application" element={<JobApplication />} />
        <Route path="/child-registration" element={<ChildRegistration />} />
      </Routes>
    </div>
  );
}

export default App;
