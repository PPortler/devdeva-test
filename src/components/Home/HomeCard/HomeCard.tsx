import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { HomeItem } from '@/types/home/HomeItem'

type Props = {
  homeItem: HomeItem
}

function HomeCard({ homeItem }: Props) {
  const Icon = homeItem.icon

  return (
    <Link
      to={homeItem.href}
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#c01820]/40
        hover:bg-white/10
        hover:shadow-2xl
        hover:shadow-[#c01820]/10
      "
    >
      {/* CARD GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-[#c01820]/25
          via-[#ff4d4f]/10
          to-transparent
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">
        {/* ICON */}
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-white/10
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:border-[#c01820]/30
            group-hover:bg-[#c01820]/10
          "
        >
          <Icon size={30} className="text-white" />
        </div>

        {/* TEXT */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white">
            {homeItem.title}
          </h2>

          <p className="mt-3 leading-relaxed text-zinc-400">
            {homeItem.description}
          </p>
        </div>

        {/* BUTTON */}
        <div className="mt-10 flex items-center gap-2 text-sm font-semibold text-white">
          <span>Explore Module</span>

          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </div>
      </div>
    </Link>
  )
}

export default HomeCard