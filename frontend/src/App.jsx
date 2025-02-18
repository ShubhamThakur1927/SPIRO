import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgetpassword from "./pages/Forgetpassword";
import DashboardPage from "./pages/DashboardPage";
import { useAuthstore } from "./Stores/authstores";
import Testubg from "./pages/Testubg";
import LecturesView from "./pages/LecturesView";
import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";
import Dashboardteacher from "./pages/Dashboardteacher";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, checkAuth } = useAuthstore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, student, teacher } = useAuthstore();
  if (isAuthenticated && student?.role === "student") {
    return <Navigate to="/dashboard" replace />;
  }
  if(isAuthenticated && student?.role === "teacher"){
    return <Navigate to="/teacher-dashboard" replace />;
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
          <RedirectAuthenticatedUser>
            <Login />
          </RedirectAuthenticatedUser>
        } />

        <Route path="/teacher-dashboard" element={
          <ProtectedRoute>
            <Dashboardteacher />  
          </ProtectedRoute>
        } />

        <Route path="/Signup" element={<Signup />} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/Forgetpassword" element={<Forgetpassword />} />
        <Route path="/test" element={<Testubg />} />
        <Route path="/pagenotfound" element={<PageNotFound/>} />
        <Route path="*" element={<Navigate to="/pagenotfound" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
