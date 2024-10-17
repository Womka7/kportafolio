import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Karina Pineda Womka-Dev",
  description: "Portafolio personal de Karina Pineda Womka-Dev frontend en riwi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Karina Pineda Womka-Dev frontend portafolio personal" />
        <meta name="keywords" content="Karina Pineda Parra, womka7, portafolio, frontend developer, systems engineer, html, tailwind, css, javasript, react, next, flutter, python, dart, typescript" />
        <meta name="sitedomain" content="https://karinapineda-womka7.com" />
        <meta name="organization" content="Riwi portafolio frontend" />
        <meta name="author" content="Wendy Karina Pineda Parra" />
        <meta name="designer" content="Wendy Karina Pineda Parra" />
        <meta name="copyright" content="© 2024 Portafolio Karina Pineda Parra -Womka7. Todos los derechos reservados." />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="revisit-after" content="15days" />
        <link rel="shortcut icon" href="public/img/favicon.ico" type="image/x-icon"/>
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
