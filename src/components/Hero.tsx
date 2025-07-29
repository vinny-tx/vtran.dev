export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I&rsquo;m <span className="text-pink-500">Vince</span></h1>
        <p className="mt-4 text-lg md:text-2xl">Full Stack Developer · React · Go · .NET</p>
        <a href="#projects" className="inline-block mt-6 px-6 py-3 bg-pink-500 text-white rounded-xl">View My Work</a>
      </div>
    </section>
  )
}