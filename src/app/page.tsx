import { redirect } from "next/navigation";

export default function Home() {
  redirect("/about")
  // redirige directamente a la pagina about cuando se ingrese
  return (
    <>
      <h1>Home Page</h1>
      
    </>
  )
}
