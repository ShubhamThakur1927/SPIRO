import React from "react";
import { BrowserRouter, Navigate, Route, Router, Routes } from "react-router-dom";
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

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, teacher } = useAuthstore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated,  student } = useAuthstore();

  if (isAuthenticated && !student.isVerified) {
    
    return <Navigate  to="/dashboard" replace />;
  }

  return children;
};

const RedirectAuthenticatedStudent = ({ children }) => {
  const { isAuthenticated,  student } = useAuthstore();
  if (isAuthenticated && !student.isVerified) {
    
    return <Navigate  to="/dashboard" replace />;
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
            <LecturesView/>
          </ProtectedRoute>
          } />
        <Route path="/dashboard" element={
          <ProtectedRoute>
          <DashboardPage />
          </ProtectedRoute>
        } 
        />
        <Route
          path="/teacherlogin"
          element={
            <RedirectAuthenticatedUser>
              <Login/>
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/login" element={
          <RedirectAuthenticatedUser>
            <Login/>
          </RedirectAuthenticatedUser>
          
      } />

        <Route path="/verify-email" element={<Verification />} />


        <Route path="/Signup" element={<Signup />} />
        <Route path="/Forgetpassword" element={<Forgetpassword />} />


        {/* Only for testing... */}

        <Route path="/test" element={<Testubg/>} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
