import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects"; // 👈 import the array cleanly

export default function ProjectCard() {
  const [filter, setFilter] = useState("All");

  // Define main filter categories
  const categories = ["All", "Renewable", "CCTV/Security", "Electrical"];

  // Apply filter logic
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => {
          if (filter === "Renewable") {
            return (
              p.tags.includes("Hybrid PV") ||
              p.tags.includes("Renewable") ||
              p.tags.includes("Solar") ||
              p.tags.includes("Inverter") ||
              p.tags.includes("Battery") ||
              p.tags.includes("Backup Power")
            );
          }
          if (filter === "CCTV/Security") {
            return p.tags.includes("CCTV") || p.tags.includes("Security");
          }
          if (filter === "Electrical") {
            return (
              p.tags.includes("Electrical") ||
              p.tags.includes("Electrical Services") ||
              p.tags.includes("Wiring") ||
              p.tags.includes("Power Distribution")
            );
          }
          return true;
        });

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-stone-900">Projects</h1>
      <p className="text-stone-600 mt-2">
        Selected case studies showcasing our solar, electrical, and security
        solutions in action.
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mt-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              filter === cat
                ? "bg-blue-600 text-white shadow"
                : "bg-blue-50 text-blue-700 hover:bg-blue-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl border border-blue-50 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition"
          >
            <img
              src={p.image}
              alt={p.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-stone-900">
                {p.title}
              </h3>
              <p className="text-stone-600 mt-2">{p.summary}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <ul className="mt-3 text-sm text-stone-500 list-disc list-inside">
                {p.metrics.map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>

              <div className="flex items-center gap-4 mt-5">
                <Link
                  to="/contact"
                  className="text-blue-700 hover:text-blue-900 font-medium"
                >
                  Request full case study →
                </Link>
                <Link
                  to={`/projects/${p.id}`}
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  View Project →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
