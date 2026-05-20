import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import Navbar from '../components/Navbar'

export default function Watch() {
  const { id } = useParams()

  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      <div className="pt-20 px-4">
        <div className="aspect-video max-w-6xl mx-auto">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=b9EkMc79ZSU"
            width="100%"
            height="100%"
            controls
            playing
          />
        </div>
        <div className="max-w-6xl mx-auto mt-6">
          <h1 className="text-3xl font-bold">Now Playing</h1>
          <p className="text-gray-400 mt-2">Enjoy watching!</p>
        </div>
      </div>
    </div>
  )
}
