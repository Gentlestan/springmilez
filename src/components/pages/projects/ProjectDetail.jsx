import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold text-red-600">Project not found</h1>
        <Link to="/projects" className="text-blue-600 hover:underline mt-4 block">
          ← Back to projects
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-72 object-cover rounded-xl"
        loading="lazy"
      />

      <h1 className="text-3xl md:text-4xl font-bold mt-6 text-stone-900">
        {project.title}
      </h1>
      <p className="text-stone-600 mt-2">{project.summary}</p>

      {/* Tags + Status */}
      <div className="flex flex-wrap gap-3 mt-4 items-center">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full"
          >
            {tag}
          </span>
        ))}
        {project.status && (
          <span
            className={`px-3 py-1 text-xs font-medium rounded ${
              project.status === "concept"
                ? "bg-amber-100 text-amber-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {project.status}
          </span>
        )}
      </div>

      {/* Metrics */}
      <ul className="mt-3 text-sm text-stone-500 list-disc list-inside">
        {project.metrics.map((m, idx) => (
          <li key={idx}>{m}</li>
        ))}
      </ul>

      {/* Specs */}
      {project.spec && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-semibold">Inverter(s)</h4>
            <p className="text-sm text-stone-700">{project.spec.inverters}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Battery</h4>
            <p className="text-sm text-stone-700">{project.spec.battery}</p>
          </div>
        </div>
      )}

      {/* Case Study Sections */}
      <section className="mt-10 space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-stone-900">Challenge</h2>
          <p className="text-stone-700 mt-2">{project.challenge}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-stone-900">Solution</h2>
          <p className="text-stone-700 mt-2">{project.solution}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-stone-900">Deliverables</h2>
          <ul className="list-disc list-inside text-stone-700 mt-2">
            {project.deliverables.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>

        {project.testimonial && (
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg">
            <p className="italic text-amber-800">{project.testimonial}</p>
          </div>
        )}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">
              Project Image Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} image ${idx + 1}`}
                  className="rounded-lg object-cover w-full h-40 md:h-48"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        )}
      </section>

      <Link
        to="/projects"
        className="inline-block mt-10 text-blue-600 hover:underline"
      >
        ← Back to projects
      </Link>
    </article>
  );
}
