import { useState, useEffect } from 'react'
import { Movie } from '../types'

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch movies from Firebase or API
    const fetchMovies = async () => {
      try {
        // Sample data
        const sampleMovies: Movie[] = [
          {
            id: '1',
            title: 'Stranger Things',
            description: 'A group of kids uncover supernatural mysteries.',
            videoUrl: 'https://www.youtube.com/watch?v=b9EkMc79ZSU',
            posterUrl: 'https://image.tmdb.org/t/p/w500/49WJfeNqCm1Z4DZBZOeXdWeWn4x.jpg',
            backdropUrl: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
            genre: 'Sci-Fi',
            year: 2016,
            rating: 8.7,
            duration: '51min',
            isSeries: true
          }
        ]
        setMovies(sampleMovies)
      } catch (error) {
        console.error('Error fetching movies:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  return { movies, loading }
}
