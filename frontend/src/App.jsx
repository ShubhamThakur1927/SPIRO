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
import Termsandcondition from "./Tests/Components/Termsandcondition";
import Aboutuspage from "./Tests/Components/Aboutuspage";
import Contactuspage from "./Tests/Components/Contactuspage";
import Privacypolicy from "./Tests/Components/Privacypolicy";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, checkAuth } = useAuthstore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, role, checkAuth } = useAuthstore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  if (isAuthenticated && role === "student") {
    return <Navigate to="/dashboard" replace />;
  }
  if(isAuthenticated && role === "teacher"){
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
          <ProtectedRoute>
          <RedirectAuthenticatedUser>
            <Login />
          </RedirectAuthenticatedUser>
          </ProtectedRoute>
        } />

        <Route path="/teacher-dashboard" element={
          <ProtectedRoute>
            <Dashboardteacher />  
          </ProtectedRoute>
        } />

        <Route path="/Signup" element={
          <ProtectedRoute>
          <RedirectAuthenticatedUser>
          <Signup />
          </RedirectAuthenticatedUser>
          </ProtectedRoute>
          } />
        <Route path="/about-us" element={<Aboutuspage/>}/>
        <Route path="/Forgetpassword" element={
          <ProtectedRoute>
          <Forgetpassword />
          </ProtectedRoute>
        } />
        <Route path="/test" element={
          <ProtectedRoute>
          <Testubg />
          </ProtectedRoute>
          } />
        <Route path="/pagenotfound" element={<PageNotFound/>} />
        <Route path="*" element={<Navigate to="/pagenotfound" />} />
        <Route path="/terms&conditions" element={<Termsandcondition/>}/>
        <Route path="/contact-us" element={<Contactuspage/>} />
        <Route path="/terms-us" element={<Termsandcondition/>} />
        <Route path="/privacy-us" element={<Privacypolicy/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
