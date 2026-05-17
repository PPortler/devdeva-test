import devdevaLogo from '@/assets/images/devdeva_logo.png'

function HeroSection() {
  return (
    <>
      {/* LOGO */}
      <div>
        <img
          src={devdevaLogo}
          alt="DEVDEVA Logo"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Title */}
      <div className="mt-7 max-w-3xl text-center">
        <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
          Build & Experiment
          <span className="bg-gradient-to-r from-[#ff4d4f] to-[#c01820] bg-clip-text text-transparent">
            {' '}
            Frontend
          </span>
          <br />
          Systems
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-zinc-400 md:text-xl">
          A frontend testing environment for building dashboards, analytics systems, and interactive UI components using React, TypeScript, and modern web technologies.
        </p>
      </div>
    </>
  )
}

export default HeroSection