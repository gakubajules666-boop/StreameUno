import Navbar from '../components/Navbar'

export default function MyList() {
  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      <div className="pt-24 px-4 md:px-12">
        <h1 className="text-3xl font-bold mb-6">My List</h1>
        <div className="text-center text-gray-400">
          <p>Your saved movies will appear here</p>
        </div>
      </div>
    </div>
  )
}
