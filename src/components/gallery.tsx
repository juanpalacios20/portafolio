import { Card, CardHeader, CardBody, Image, Chip } from "@heroui/react";
import { title } from "./primitives";
const projects = [
  {
    title: "AFH: Metalmecánicos",
    description:
      "Sistema integral para la gestión de inventario, herramientas, cotizaciones, órdenes de trabajo y administración financiera de la empresa AFH: Metalmecánicos. La plataforma permite realizar seguimientos detallados a los avances de trabajo, generar actas de entrega y visualizar reportes a través de gráficos interactivos, optimizando así los procesos internos de la organización.",
    image: "public/afh.jpg",
    technologies: ["Angular", "Django", "Sqlite", "Vercel", "Render"],
  },
  {
    title: "Nicelook",
    description:
      "Aplicación web desarrollada como proyecto académico para la peluquería Stylo's en Palmira. Permite a los clientes gestionar sus citas en línea, mientras que el establecimiento administra fácilmente su agenda y disponibilidad de servicios.",
    image: "public/nicelook.jpg",
    technologies: ["React", "Django", "PostgreSQL"],
  },
  {
    title: "Bomberos Santa Elena",
    description:
      "Plataforma web para la estación de Bomberos Voluntarios de Santa Elena, diseñada para gestionar turnos e ingresos del personal operativo mediante validación por huella digital y códigos QR. Automatiza el control de asistencia y mejora la trazabilidad del equipo de trabajo.",
    image: "public/bomberos.jpg",
    technologies: ["React", "Flask", "MySQL"],
  },
];

const Gallery: React.FC = () => {
  return (
    <section className="flex flex-col gap-2 items-center justify-center">
      <span className={title({ size: "sm" })}>Mis proyectos</span>

      <section className="flex flex-col items-center justify-center w-full p-4 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="py-4 w-full transition duration-150 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            <CardHeader className="pb-0 pt-2 px-4">
              <h4 className="font-bold text-large">{project.title}</h4>
            </CardHeader>
            <CardBody className="py-4 px-4">
              <section className="flex flex-col md:flex-row gap-4 items-start">
                <Image
                  alt={`Imagen del proyecto ${project.title}`}
                  className="object-cover rounded-xl flex-shrink-0 w-[200px] h-auto"
                  src={project.image}
                />

                <section className="flex flex-col gap-4 flex-1">
                  <section className="flex flex-col justify-start">
                    <p className="text-medium font-medium mt-2">
                      {project.description}
                    </p>
                  </section>

                  <section>
                    <span className="text-small font-semibold">
                      Tecnologías utilizadas:
                    </span>

                    <section className="flex flex-row flex-wrap gap-2 mt-1">
                      {project.technologies?.map((tech, i) => (
                        <Chip
                          color="primary"
                          variant="shadow"
                          className="text-white"
                          key={i}
                        >
                          {tech}
                        </Chip>
                      ))}
                    </section>
                  </section>
                </section>
              </section>
            </CardBody>
          </Card>
        ))}
      </section>
    </section>
  );
};

export default Gallery;
