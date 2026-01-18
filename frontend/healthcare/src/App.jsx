import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import HealthTopics from "./pages/HealthTopics";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import ProviderDashboard from "./pages/ProviderDashboard";
import PatientStatus from "./pages/PatientStatus";
import PatientProfile from "./pages/PatientProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/health-topics" element={<HealthTopics />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
          
        {/* Dashboards & Protected Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/provider-dashboard" element={<ProviderDashboard />} />
        <Route path="/patient/:id" element={<PatientStatus />} />
        
        {/* FIXED: Changed path to "/profile" to match the sidebar link */}
        <Route path="/profile" element={<PatientProfile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;