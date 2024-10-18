import Image from 'next/image';

export interface IProject {
  image: string;
  title: string;
  description: string;
  link: string;
}

interface IPropsProjects {
  project: IProject;
}

const ProjectCard: React.FC<IPropsProjects> = ({ project }) => {
  return (
    <div className="bg-greyl rounded-lg overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <div className="relative h-28 p-y-3">
        <Image
          src={project.image}
          alt={`Imagen de ${project.title}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-whites mb-4">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-salmon text-whites font-semibold px-4 py-2 rounded-full "
        >
          Ver Proyecto
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
