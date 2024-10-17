import Image from "next/image";
import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa";

export default function AboutPage() {

    return (
        <div className="h-screen overflow-auto flex flex-1 border-2 border-purple-700 bg-greenaqua">
            <article className=" w-2/3 border-2 border-red-700">
                <h1 className="flex items-center text-2xl">Hola! Soy Karina Pineda<FaLaptopCode size={30} className="text-amber-300 " /> </h1>
                <div className="border-2 border-amber-700">
                    <p>
                        Desarrolladora Frontend con un profundo conocimiento de JavaScript y React.js.
                        Tengo experiencia en diseño y desarrollo de sitios web y aplicaciones móviles.
                    </p>
                </div>
            </article>
            <article className=" w-1/3 border-2 border-blue-700">
                <Image src="/img/images.png" alt="logo-coffee" width={80} height={80} className="object-cover" />
            </article>
        </div>
    )
}