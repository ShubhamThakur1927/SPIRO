import React, { useEffect, useState } from "react";
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
import Loader from "./components/Loader";


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, checkAuth } = useAuthstore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authenticate = async () => {
      await checkAuth();
      setLoading(false);
    };
    authenticate();
  }, [checkAuth]);

  if (loading) {
    return <Loader />; // Show loader while checking authentication
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated } = useAuthstore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authenticate = async () => {
      await checkAuth();
      setLoading(false);
    };
    authenticate();
  }, [checkAuth]);

  if (loading) {
    return <Loader />; // Show loader while checking authentication
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

const RedirectAuthenticatedStudent = ({ children }) => {
  const { isAuthenticated, student } = useAuthstore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authenticate = async () => {
      await checkAuth();
      setLoading(false);
    };
    authenticate();
  }, [checkAuth]);

  if (loading) {
    return <Loader />; // Show loader while checking authentication
  }

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
          <RedirectAuthenticatedUser>
            <Login />
          </RedirectAuthenticatedUser>
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
