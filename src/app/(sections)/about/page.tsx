import Image from "next/image";
import { FaJs, FaLaptopCode, FaPython, FaReact } from "react-icons/fa";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiDart, SiFlutter, SiTypescript } from "react-icons/si";

export default function AboutPage() {
    return (
        <div className="flex flex-col md:flex-row bg-greenaqua text-gray-800 p-8">
            <article className="w-full md:w-2/3 pr-8">
                <h1 className="text-4xl md:text-5xl font-bold text-whites uppercase mb-4">
                    hola! soy karina,<br />
                    una <span className="text-salmon">Frontend developer</span><br />
                    e ingeniera de sistemas <FaLaptopCode className="inline-block text-salmon ml-2" />
                </h1>
                <div className="mb-6 text-whites">
                    <p className="mb-4">
                        Vengo de una familia cafetera, con valores como la perseverancia, la empatía y el trabajo en equipo. Me gusta conectar con las personas,
                        construir relaciones de confianza y aportar positivamente. Tengo la convicción de que la amabilidad y el respeto son esenciales para lograr
                        cualquier objetivo. A nivel técnico trabajo en soluciones eficientes para una agradable experiencia de usuario.
                        Cuento con experiencia en el desarrollo de sitios web y aplicaciones móviles con JavaScript, Next.js y Flutter.
                    </p>
                    <p className="text-lg mb-4  gap-2 flex flex-row">
                        <FaReact />
                        <RiNextjsFill />
                        <SiFlutter />
                        <FaCss3Alt />
                        <FaHtml5 />
                        <FaJs />
                        <SiTypescript />
                        <SiDart />
                        <FaPython />
                    </p>
                </div>
            </article>
            <article className="w-full md:w-1/3 mt-8 md:mt-0">
                <div className="relative w-64 h-64 mx-auto">
                    <Image
                        src="/img/ka.jpg"
                        alt="Profile"
                        width={256}
                        height={256}
                        className="rounded-full object-cover relative z-10"
                    />
                </div>
            </article>
        </div>
    )
}