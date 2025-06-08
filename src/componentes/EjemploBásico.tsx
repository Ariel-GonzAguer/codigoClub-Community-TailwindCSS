import EjemploResponsivo from "../componentes/EjemploResponsivo"
import EjemploHover from "./EjemploHover"
import EjemploTheme from "./EjemploTheme"
import EjemploUsoPlugin from "./EjemploUsoPlugin"

export default function EjemploBásico() {

  return (
    // Para empezar a usar Tailwind CSS dentro de nuestros componentes de React, debemos agregar la propiedad `className` a los elementos HTML y utilizar las clases de Tailwind CSS. Esto nos permite aplicar estilos de manera rápida y eficiente, sin cambiar entre archivos CSS y JSX.
    <section className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl mt-4 mb-4 font-extrabold text-white">Código Club</h1>
       {/* <EjemploResponsivo /> */}
      {/* <EjemploHover /> */}
      {/* <EjemploTheme /> */}
      {/* <EjemploUsoPlugin />  */}
    </section>
  )
}
