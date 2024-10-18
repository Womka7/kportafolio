import Image from "next/image";
import { FaJs, FaLaptopCode, FaPython, FaReact } from "react-icons/fa";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiDart, SiFlutter, SiTypescript } from "react-icons/si";

export default function AboutPage() {
    return (
        <div className="flex flex-col-reverse justify-center align-center px-12 py-4 bg-greenaqua text-gray-800  md:flex-row">
            <article className="w-full md:w-2/3">
                <h1 className="text-lg font-bold text-whites uppercase mb-4 md:text-5xl">
                    holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaq! soy karina,<br />
                    una <span className="text-salmon">Frontend developer</span><br />
                    e ingeniera de sistemas <FaLaptopCode className=" text-2xl text-salmon inline-block " />
                </h1>
                <div className="mb-6  text-whites text-sm md:text-2xl">
                    <p className="mb-4">
                        Vengo de una familia cafetera y <span className="text-salmon capitalize">santandereana</span>, con valores como la perseverancia, la empatía y el trabajo en equipo. Me gusta conectar con las personas,
                        construir relaciones de confianza y aportar positivamente. <br/>Tengo la convicción de que la amabilidad y el respeto son esenciales para lograr
                        cualquier objetivo. A nivel técnico trabajo en soluciones eficientes para una agradable experiencia de usuario.
                        Cuento con experiencia en el desarrollo de sitios web y aplicaciones móviles con JavaScript, Next.js y Flutter.
                    </p>
                    <p className=" text-4xl gap-6 text-salmon  flex-wrap mb-4  flex justify-around">
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
            <article className=" md:w-1/3 md:mt-0">
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