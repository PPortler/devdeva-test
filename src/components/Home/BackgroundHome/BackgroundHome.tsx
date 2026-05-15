function BackgroundHome() {
  return (
    <div className="absolute inset-0">
      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* RED GLOW */}
      <div className="absolute left-[-120px] top-[-120px] h-[380px] w-[380px] rounded-full bg-[#c01820]/25 blur-3xl" />

      <div className="absolute bottom-[-160px] right-[-120px] h-[380px] w-[380px] rounded-full bg-red-500/20 blur-3xl" />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  )
}

export default BackgroundHome