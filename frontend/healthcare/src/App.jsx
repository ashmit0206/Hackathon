import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProviderDashboard from "./pages/ProviderDashboard";
import PatientStatus from "./pages/PatientStatus";
import PatientProfile from "./pages/PatientProfile"; // Import the new file

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Home />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Patient Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Provider Dashboard */}
        <Route path="/provider-dashboard" element={<ProviderDashboard />} />

        {/* Provider -> Patient Status */}
        <Route path="/patient/:id" element={<PatientStatus />} />

        <Route path="/profile" element={<PatientProfile />} /> {/* New Route */}

        {/* Other pages */}
        <Route path="/profile" element={<div>Profile Page</div>} />
        <Route path="/goals" element={<div>Goals Page</div>} />
        <Route path="/reminders" element={<div>Reminders Page</div>} />
        

        {/* Logout */}
        <Route path="/logout" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
