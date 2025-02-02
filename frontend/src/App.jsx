import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgetpassword from "./pages/Forgetpassword";
import DashboardPage from "./pages/DashboardPage";
import { useAuthstore } from "./Stores/authstores";
import Verification from "./pages/Verification";
import StudentLogin from "./pages/StudentLogin";
import Testubg from "./pages/Testubg";
import LecturesView from "./pages/LecturesView";
import AboutUs from "./pages/AboutUs";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, teacher } = useAuthstore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, student } = useAuthstore();

  if (isAuthenticated && student.isVerified) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

const RedirectAuthenticatedStudent = ({ children }) => {
  const { isAuthenticated, student } = useAuthstore();
  if (isAuthenticated && !student.isVerified) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lectures/:id" element={
          <ProtectedRoute>
            <LecturesView />
          </ProtectedRoute>
        } />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />
        <Route path="/login" element={
            <Login />
        } />
        <Route path="/verify-email" element={<Verification />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/Forgetpassword" element={<Forgetpassword />} />
        <Route path="/test" element={<Testubg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
