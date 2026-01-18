import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import HealthTopics from "./pages/HealthTopics";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import ProviderDashboard from "./pages/ProviderDashboard";
import PatientStatus from "./pages/PatientStatus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/health-topics" element={<HealthTopics />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboards */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/provider-dashboard" element={<ProviderDashboard />} />
        <Route path="/patient/:id" element={<PatientStatus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
