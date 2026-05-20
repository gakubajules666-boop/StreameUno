import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Row from '../components/Row'
import { Movie } from '../types'

export default function Home() {
  const [trending, setTrending] = useState<Movie[]>([])
  const [originals, setOriginals] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Sample data - replace with Firebase later
    const sampleMovies: Movie[] = [
      {
        id: '1',
        title: 'Stranger Things',
        description: 'A group of kids uncover supernatural mysteries in their small town.',
        videoUrl: 'https://www.youtube.com/watch?v=b9EkMc79ZSU',
        posterUrl: 'https://image.tmdb.org/t/p/w500/49WJfeNqCm1Z4DZBZOeXdWeWn4x.jpg',
        backdropUrl: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
        genre: 'Sci-Fi',
        year: 2016,
        rating: 8.7,
        duration: '51min',
        isSeries: true
      },
      {
        id: '2',
        title: 'Extraction 2',
        description: 'After barely surviving his last mission, Tyler Rake returns for another dangerous extraction.',
        videoUrl: 'https://www.youtube.com/watch?v=Y274jZs5s7s',
        posterUrl: 'https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giYn4mKzJfuiTj.jpg',
        backdropUrl: 'https://image.tmdb.org/t/p/original/kqjCsaEEv4YyYFjQpS5Fsv4GQzP.jpg',
        genre: 'Action',
        year: 2023,
        rating: 7.5,
        duration: '2h 3min',
        isSeries: false
      }
    ]
    
    setTrending(sampleMovies)
    setOriginals(sampleMovies)
    setLoading(false)
  }, [])

  if (loading) return <div className="text-white text-center mt-20">Loading...</div>

  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      <Hero movie={trending[0]} />
      <Row title="Trending Now" movies={trending} />
      <Row title="Netflix Originals" movies={originals} />
    </div>
  )
}
