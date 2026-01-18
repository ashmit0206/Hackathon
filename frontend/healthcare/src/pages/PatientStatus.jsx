import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PatientStatus = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <div className="p-10">No patient data found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 font-semibold"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-6">
        Patient: {state.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="font-semibold">Steps</h3>
          <p className="text-2xl font-bold">3,620</p>
        </div>

        <div className="card">
          <h3 className="font-semibold">Sleep</h3>
          <p className="text-2xl font-bold">6h 30m</p>
        </div>

        <div className="card">
          <h3 className="font-semibold">Overall Status</h3>
          <p className="text-xl font-bold text-teal-600">
            {state.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientStatus;
