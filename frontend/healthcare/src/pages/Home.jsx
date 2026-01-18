import Navbar from "../components/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />

      <section className="home-section">
        <h2 className="section-title">Latest Health Information</h2>

        <div className="card-grid">
          <div className="health-card">
            <h3>COVID-19 Updates</h3>
            <p>
              Stay informed about the latest COVID-19 guidelines and vaccination
              information.
            </p>
            <button>Read More</button>
          </div>

          <div className="health-card">
            <h3>Seasonal Flu Prevention</h3>
            <p>
              Learn about steps you can take to prevent the seasonal flu and when
              to get vaccinated.
            </p>
            <button>Read More</button>
          </div>

          <div className="health-card">
            <h3>Mental Health Awareness</h3>
            <p>
              Explore resources and support options for maintaining good mental
              health.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        © 2026 HealthCare Portal
      </footer>
    </div>
  );
}
