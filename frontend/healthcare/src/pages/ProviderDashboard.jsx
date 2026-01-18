import React from "react";
import { useNavigate } from "react-router-dom";

const patients = [
  { id: 1, name: "David Miller", status: "Active" },
  { id: 2, name: "Sophia Johnson", status: "Needs Attention" },
  { id: 3, name: "Rahul Sharma", status: "Good" },
];

const ProviderDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Provider Panel</h2>

        <nav className="space-y-4">
          <button className="sidebar-btn">Dashboard</button>
          <button
            className="sidebar-btn"
            onClick={() => navigate("/login")}
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">Patient List</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patients.map((patient) => (
            <div
              key={patient.id}
              className="card cursor-pointer hover:shadow-xl"
              onClick={() =>
                navigate(`/patient/${patient.id}`, { state: patient })
              }
            >
              <h3 className="text-lg font-bold">{patient.name}</h3>
              <p className="text-gray-500 mt-2">
                Status: {patient.status}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProviderDashboard;
