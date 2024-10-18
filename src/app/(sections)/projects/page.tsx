import { Metadata } from 'next';
import ProjectCard from '../../../components/CardProject/Card'; // Asegúrate de que la ruta sea correcta

// Esta metadata lo que hace es darle información a cada página

export const metadata: Metadata = {
  title: "Proyectos-Karina Pineda Womka-Dev",
  description: "Portafolio personal de Karina Pineda Womka-Dev frontend en riwi",
  robots: {follow:true,index:true},
};
export default function ProjectsPage() {
  const projects = [
    {
      title: "Parking Now",
      description: "Applicación para gestion de parqueaderos inmediatos ",
      link: "",
      image: "/img/logo1.png", 
    },
    {
      title: "Carites",
      description: "aplicación como puente comunicador entre campesinos y consumidores finales  para disminucion de perdidas de materia prima en el campo",
      link: "",
      image: "/img/logo1.png", 
    },
    {
      title: "Coffee shop",
      description: "landing page realizada para un comercio familiar local",
      link: "",
      image: "/img/logo1.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-5 bg-greenaqua text-white">
      <h1 className="text-2xl md:text-2xl font-bold mb-1 text-center">Mis proyectos y contribuciones.</h1>
      <p className="text-xl text-center mb-12 text-gray-400">Ve mi trabajo.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}