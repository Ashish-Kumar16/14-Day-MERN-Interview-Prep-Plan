// 2. Protect a Dashboard route by redirecting unauthenticated users to login.

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";

// Dummy authentication function
const isAuthenticated = () => {
  return false; // Change to true to simulate logged-in user
};

function Home() {
  return <h2>Home Page</h2>;
}

function Login() {
  return <h2>Login Page</h2>;
}

function Dashboard() {
  return <h2>Dashboard Page (Protected)</h2>;
}

// Protected Route component
function ProtectedRoute({ children }) {
  const location = useLocation();
  if (!isAuthenticated()) {
    // Redirect to login, save current location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
