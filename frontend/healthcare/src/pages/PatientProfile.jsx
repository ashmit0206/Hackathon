import React from "react";
import { useNavigate } from "react-router-dom";

const PatientProfile = () => {
  const navigate = useNavigate();

  // Mock Data for the patient
  const patientData = {
    name: "David Smith",
    age: 34,
    gender: "Male",
    location: "New York, USA",
    email: "david.smith@example.com",
    phone: "+1 (555) 019-2834",
    address: "456 Wellness Ave, Health City, NY 10012",
    bloodGroup: "O+",
    height: "180 cm",
    weight: "75 kg",
    stats: {
      steps: "3,620",
      activeTime: "56 min",
      sleep: "6h 30m",
      calories: "1,712 kcal"
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      
      {/* SIDEBAR (Reusable) */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-6 hidden md:flex">
        <h2 className="text-2xl font-bold mb-8 tracking-wide">Health</h2>
        <nav className="space-y-4">
          <button onClick={() => navigate("/dashboard")} className="block w-full text-left py-2 px-4 rounded hover:bg-gray-800 text-gray-400 hover:text-white transition">
            Dashboard
          </button>
          <button onClick={() => navigate("/profile")} className="block w-full text-left py-2 px-4 rounded bg-gray-800 text-white font-medium">
            My Profile
          </button>
          <button onClick={() => navigate("/goals")} className="block w-full text-left py-2 px-4 rounded hover:bg-gray-800 text-gray-400 hover:text-white transition">
            Wellness Goals
          </button>
          <button onClick={() => navigate("/reminders")} className="block w-full text-left py-2 px-4 rounded hover:bg-gray-800 text-gray-400 hover:text-white transition">
            Reminders
          </button>
          <button onClick={() => navigate("/")} className="block w-full text-left py-2 px-4 rounded hover:bg-gray-800 text-gray-400 hover:text-white transition mt-8">
            Logout
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
          <button 
            onClick={() => navigate("/dashboard")}
            className="text-sm text-indigo-600 hover:text-indigo-800 font-medium underline"
          >
            &larr; Back to Dashboard
          </button>
        </header>

        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* 1. TOP PROFILE CARD */}
          <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col md:flex-row items-center md:items-start gap-6 border border-gray-100">
            {/* Avatar Placeholder */}
            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-3xl font-bold shadow-inner">
              {patientData.name.charAt(0)}
            </div>
            
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl font-bold text-gray-800">{patientData.name}</h2>
              <p className="text-gray-500">{patientData.location}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-3">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Patient</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">{patientData.age} Years</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">{patientData.gender}</span>
              </div>
            </div>

            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition text-sm font-medium">
              Edit Profile
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 2. PERSONAL INFORMATION */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Personal Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Contact Email</span>
                  <span className="text-gray-800 font-medium">{patientData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Phone Number</span>
                  <span className="text-gray-800 font-medium">{patientData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Address</span>
                  <span className="text-gray-800 font-medium text-right w-1/2">{patientData.address}</span>
                </div>
              </div>
            </div>

            {/* 3. PHYSICAL & MEDICAL INFO */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Medical Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Blood Group</span>
                  <span className="bg-red-50 text-red-600 px-3 py-1 rounded-lg font-bold">{patientData.bloodGroup}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Height</span>
                  <span className="text-gray-800 font-medium">{patientData.height}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Weight</span>
                  <span className="text-gray-800 font-medium">{patientData.weight}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. HEALTH STATS OVERVIEW */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Activity Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl text-center">
                <p className="text-gray-500 text-sm mb-1">Steps Today</p>
                <p className="text-xl font-bold text-indigo-600">{patientData.stats.steps}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl text-center">
                <p className="text-gray-500 text-sm mb-1">Active Time</p>
                <p className="text-xl font-bold text-orange-500">{patientData.stats.activeTime}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl text-center">
                <p className="text-gray-500 text-sm mb-1">Calories Burned</p>
                <p className="text-xl font-bold text-green-500">{patientData.stats.calories}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl text-center">
                <p className="text-gray-500 text-sm mb-1">Sleep</p>
                <p className="text-xl font-bold text-blue-500">{patientData.stats.sleep}</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default PatientProfile;