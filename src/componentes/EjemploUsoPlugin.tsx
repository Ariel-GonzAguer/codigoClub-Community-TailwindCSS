import { useState } from "react"

export default function EjemploUsoPlugin() {
  const [mostrar, setMostrar] = useState(false)

  function handleClick() {
    setMostrar(!mostrar)
  }

  return (
    // Este ejemplo muestra cómo usar un plugin de Tailwind CSS para animar la aparición y desaparición de un elemento. Además podemos ver cómo aplicar clases de manera condicional utilizando el estado de React.
    <section className="flex items-center justify-center">
      <button type="button" onClick={handleClick} className={`border-4 border-black p-4 mt-4 mr-8 ${mostrar ? "bg-amber-300" : "bg-rose-400" } rounded`}> {mostrar ? "Ocultar" : "Mostrar"} </button>
      <div className={`${mostrar ? "animate-fade-in" : "animate-fade-out"} flex flex-col items-center justify-center bg-white border-4 border-dashed size-56 p-4 mb-4 mt-4 `}>
        El plugin de Tailwind CSS que estamos usando en este ejemplo fue creado por MiduDev y la comunidad que le sigue.
      </div>
    </section>
  )
}
