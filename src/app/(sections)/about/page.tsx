import { FaLaptopCode } from "react-icons/fa";

export default function AboutPage(){

    return(
        <section className=" flex border-2 border-purple-700">
            <article className=" w-2/3 border-2 border-red-700">
                <h1 className="flex items-center">Hola! Soy Karina Pineda<FaLaptopCode size={30} className="text-amber-300 " /> </h1>
            <div  className="border-2 border-amber-700">
                <p>
                    Desarrolladora Frontend con un profundo conocimiento de JavaScript y React.js.
                    Tengo experiencia en diseño y desarrollo de sitios web y aplicaciones móviles.
                </p>
            </div>
            </article>
            <article className="w-1/3 flex-1/3 border-2 border-blue-700">

            </article>
        </section>
    )
}