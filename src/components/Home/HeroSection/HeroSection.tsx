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
          Build Modern
          <span className="bg-gradient-to-r from-[#ff4d4f] to-[#c01820] bg-clip-text text-transparent">
            {' '}
            Dashboard
          </span>
          <br />
          Experiences
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-zinc-400 md:text-xl">
          Interactive task management and data visualization
          system built with React, TypeScript, Tailwind CSS,
          and modern frontend architecture.
        </p>
      </div>
    </>
  )
}

export default HeroSection