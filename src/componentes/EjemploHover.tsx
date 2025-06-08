export default function EjemploHover() {

  return (
    <section className="mb-8">
      {/* hover básico */}
      <div className="mt-12 mb-6 text-center border-8 border-dashed border-amber-300 p-6 rounded hover:border-sky-400">
        <p className="text-5xl">⭐</p>
      </div >

      {/* hover agrupado */}
      <div className="group w-56 text-center border-8 border-dashed border-amber-300 p-10 rounded hover:border-sky-400">
        <p className="text-5xl mb-4 group-hover:animate-tada">⭐</p>
        <p className="group-hover:font-extrabold">Una estrella</p>
      </div>
    </section>
  )
}
