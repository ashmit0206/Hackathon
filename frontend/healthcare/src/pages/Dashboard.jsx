import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-8">Health</h2>

        <nav className="space-y-4">
          <button onClick={() => navigate("/dashboard")} className="sidebar-btn">
            Dashboard
          </button>
          <button onClick={() => navigate("/profile")} className="sidebar-btn">
            My Profile
          </button>
          <button onClick={() => navigate("/goals")} className="sidebar-btn">
            Wellness Goals
          </button>
          <button onClick={() => navigate("/reminders")} className="sidebar-btn">
            Reminders
          </button>
          <button onClick={() => navigate("/logout")} className="sidebar-btn">
            Logout
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">Welcome, David 👋</h1>

        {/* WELLNESS GOALS */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Wellness Goals</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Steps */}
            <div className="card">
              <p className="font-semibold">Steps</p>
              <p className="text-2xl font-bold">3,620</p>
              <div className="progress">
                <div className="progress-fill w-2/3"></div>
              </div>
            </div>

            {/* Active Time */}
            <div className="card">
              <p className="font-semibold">Active Time</p>
              <p className="text-2xl font-bold">56 min</p>
              <p className="text-sm text-gray-500">1,712 kcal</p>
            </div>

            {/* Sleep */}
            <div className="card">
              <p className="font-semibold">Sleep</p>
              <p className="text-2xl font-bold">6h 30m</p>
              <div className="progress">
                <div className="progress-fill w-1/2"></div>
              </div>
            </div>
          </div>
        </section>

        {/* REMINDERS */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Preventive Care Reminders</h2>
          <ul className="bg-white p-4 rounded-xl shadow">
            <li>🩺 Upcoming Annual Check-up on 20 Jan 2026</li>
          </ul>
        </section>

        {/* HEALTH TIP */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Health Tip of the Day</h2>
          <div className="bg-white p-4 rounded-xl shadow">
            Stay hydrated — aim to drink at least 8 glasses of water daily 💧
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
