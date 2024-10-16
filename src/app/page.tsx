import { redirect } from "next/navigation";
import Header from "./components/Header/Header";
import Link from "next/link";

export default function Home() {
  redirect("/about")
  // redirige directamente a la pagina about cuando se ingrese
  return (
    <>
      <h1>Home Page</h1>
      
    </>
  )
}
