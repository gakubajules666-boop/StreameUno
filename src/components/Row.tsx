import { Movie } from '../types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

interface RowProps {
  title: string
  movies: Movie[]
}

export default function Row({ title, movies }: RowProps) {
  if (!movies || movies.length === 0) {
    return null
  }

  return (
    <div className="ml-4 md:ml-12 mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="group relative cursor-pointer">
              <img 
                src={movie.posterUrl} 
                alt={movie.title}
                className="w-full rounded-md transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition rounded-md flex items-center justify-center">
                <span className="text-white text-sm text-center p-2">{movie.title}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
