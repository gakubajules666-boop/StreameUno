import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Row from '../components/Row'
import { Movie } from '../types'

export default function Home() {
  const [trending, setTrending] = useState<Movie[]>([])
  const [originals, setOriginals] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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
        title: 'Wednesday',
        description: 'Wednesday Addams solves a murder mystery at her new school.',
        videoUrl: 'https://www.youtube.com/watch?v=Di310WS8zLk',
        posterUrl: 'https://image.tmdb.org/t/p/w500/9BFj4CiW9TzQurGJCWfUzFqXv6c.jpg',
        backdropUrl: 'https://image.tmdb.org/t/p/original/qT2QnxnyjNynODI2mBx3ctGdoUI.jpg',
        genre: 'Comedy',
        year: 2022,
        rating: 8.5,
        duration: '45min',
        isSeries: true
      }
    ]
    
    setTrending(sampleMovies)
    setOriginals(sampleMovies)
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="bg-netflix-black min-h-screen flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      <Hero movie={trending[0]} />
      <Row title="Trending Now" movies={trending} />
      <Row title="Netflix Originals" movies={originals} />
    </div>
  )
}
