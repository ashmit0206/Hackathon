import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PatientStatus = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Provider inputs
  const [status, setStatus] = useState(state?.status || "Good");
  const [remarks, setRemarks] = useState("");

  // Target goal states
  const [goalType, setGoalType] = useState("");
  const [goalValue, setGoalValue] = useState("");
  const [goalUnit, setGoalUnit] = useState("");

  if (!state) {
    return <div className="p-10">No patient data found</div>;
  }

  const handleSave = () => {
    alert(
      `Patient: ${state.name}\n\n` +
      `Status: ${status}\n` +
      `Tomorrow Goal: ${goalType} - ${goalValue} ${goalUnit}\n` +
      `Remarks: ${remarks}`
    );

    // Reset fields (demo behavior)
    setRemarks("");
    setGoalType("");
    setGoalValue("");
    setGoalUnit("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      
      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 font-semibold"
      >
        ← Back to Provider Dashboard
      </button>

      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-6">
        Patient Status — {state.name}
      </h1>

      {/* PATIENT VITALS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="card">
          <h3 className="font-semibold">Steps</h3>
          <p className="text-2xl font-bold">3,620</p>
        </div>

        <div className="card">
          <h3 className="font-semibold">Sleep</h3>
          <p className="text-2xl font-bold">6h 30m</p>
        </div>

        <div className="card">
          <h3 className="font-semibold">Current Status</h3>
          <p className="text-xl font-bold text-teal-600">{status}</p>
        </div>
      </div>

      {/* PROVIDER UPDATE SECTION */}
      <div className="bg-white p-6 rounded-xl shadow max-w-4xl space-y-6">

        {/* STATUS UPDATE */}
        <div>
          <label className="block font-semibold mb-2">
            Update Patient Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option>Good</option>
            <option>Needs Attention</option>
            <option>Critical</option>
          </select>
        </div>

        {/* TARGET GOAL */}
        <div>
          <label className="block font-semibold mb-2">
            Target Goal for Tomorrow
          </label>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              value={goalType}
              onChange={(e) => setGoalType(e.target.value)}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select Goal Type</option>
              <option value="Steps">Steps</option>
              <option value="Sleep">Sleep Duration</option>
              <option value="Exercise">Exercise Time</option>
              <option value="Hydration">Water Intake</option>
            </select>

            <input
              type="number"
              value={goalValue}
              onChange={(e) => setGoalValue(e.target.value)}
              placeholder="Target value"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <input
              type="text"
              value={goalUnit}
              onChange={(e) => setGoalUnit(e.target.value)}
              placeholder="Unit (steps, hrs, mins)"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

        </div>

        {/* REMARKS */}
        <div>
          <label className="block font-semibold mb-2">
            Provider Remarks
          </label>
          <textarea
            rows="5"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            placeholder="Clinical observations or advice..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* SAVE */}
        <button
          onClick={handleSave}
          className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
        >
          Save Update
        </button>
      </div>
    </div>
  );
};

export default PatientStatus;
