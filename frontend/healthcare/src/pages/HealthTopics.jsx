import Navbar from "../components/Navbar";

const topics = [
  {
    title: "Nutrition",
    description:
      "Learn about balanced diets, healthy eating habits, and nutritional planning to maintain optimal health.",
  },
  {
    title: "Mental Health",
    description:
      "Understand stress management, emotional well-being, mindfulness, and coping strategies for mental wellness.",
  },
  {
    title: "Fitness",
    description:
      "Explore workout routines, physical activity tips, and exercises to improve strength, flexibility, and endurance.",
  },
  {
    title: "Preventive Care",
    description:
      "Focus on regular health checkups, vaccinations, and lifestyle changes to prevent chronic diseases.",
  },
];

const HealthTopics = () => {
  return (
    <>
      <Navbar />

      <div className="p-10 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Health Topics
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold mb-3 text-teal-600">
                {topic.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HealthTopics;
