import Navbar from "../components/Navbar";

const services = [
  {
    title: "Doctor Consultation",
    description:
      "Connect with certified healthcare professionals for online consultations, diagnosis, and medical advice.",
  },
  {
    title: "Wellness Tracking",
    description:
      "Monitor daily activities such as steps, sleep, and calories to maintain a healthy lifestyle.",
  },
  {
    title: "Patient Monitoring",
    description:
      "Continuous tracking of patient vitals and health metrics for proactive and preventive care.",
  },
  {
    title: "Health Reports",
    description:
      "Access digital medical reports, prescriptions, and health history securely anytime.",
  },
];

const Services = () => {
  return (
    <>
      <Navbar />

      <div className="p-10 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold mb-3 text-teal-600">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
