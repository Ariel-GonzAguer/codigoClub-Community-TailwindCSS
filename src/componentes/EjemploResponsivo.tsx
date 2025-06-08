export default function EjemploResponsivo () {

  return (
    // con este componente vemos como se aplica la responsividad de Tailwind CSS, utilizando clases como `w-2xs` y `sm:w-2xl` para definir el ancho del componente en diferentes tamaños de pantalla, y además vemos como podemos cambiar otros estilos como el color de fondo y el texto, la posición de los elementos, etc.
    <div className="p-4 w-2xs bg-black text-white rounded-xl shadow-md flex items-center sm:w-2xl sm:bg-sky-200 sm:text-black md:bg-blue-600">
      <div className="w-full flex flex-col items-center justify-center sm:items-start">
        <div className="text-xl font-medium text-amber-300 sm:text-rose-400">Tailwind</div>
        <p>Framework CSS</p>
        <p className="block text-2xl sm:hidden">🚀🚀🚀</p>
      </div>
    </div>
  )
}
