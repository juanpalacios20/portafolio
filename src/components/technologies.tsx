import { title } from "./primitives";

const technologies = [
  { name: "Angular", color: "text-red-500 border-red-500" },
  { name: "React", color: "text-blue-500 border-blue-500" },
  { name: "Django", color: "text-green-500 border-green-500" },
  { name: "SpringBoot", color: "text-green-600 border-green-600" },
  { name: "Node.js", color: "text-lime-500 border-lime-500" },
  { name: "PostgreSQL", color: "text-blue-800 border-blue-800" },
  { name: "MongoDB", color: "text-emerald-500 border-emerald-500" },
  { name: "MySQL", color: "text-orange-500 border-orange-500" },
];

export const Technologies = () => {
  return (
    <section className="flex flex-col gap-10 items-center justify-center px-4 py-8">
      <span className={title({ size: "sm" })}>Todas las tecnologías</span>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-5xl">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`border rounded-xl p-4 text-center font-semibold shadow-md bg-white/5 backdrop-blur-sm hover:scale-105 transition duration-200 ease-in-out ${tech.color}`}
          >
            {tech.name}
          </div>
        ))}
      </section>
    </section>
  );
};
