import { Movie } from '../types'

interface HeroProps {
  movie: Movie
}

export default function Hero({ movie }: HeroProps) {
  return (
    <div className="relative h-[80vh] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${movie.backdropUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent" />
      </div>
      
      <div className="absolute bottom-20 left-0 right-0 px-4 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{movie.title}</h1>
        <p className="text-sm md:text-base text-gray-300 max-w-md mb-6">{movie.description}</p>
        <div className="flex space-x-4">
          <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-300 transition font-semibold">
            ▶ Play
          </button>
          <button className="bg-gray-500/50 text-white px-6 py-2 rounded-md hover:bg-gray-500/70 transition">
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}
