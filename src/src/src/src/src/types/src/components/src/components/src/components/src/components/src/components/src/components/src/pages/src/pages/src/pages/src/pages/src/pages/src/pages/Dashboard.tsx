import Navbar from '../components/Navbar'
import { useAuth } from '../hooks/useAuth'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      <div className="pt-24 px-4 md:px-12">
        <h1 className="text-3xl font-bold mb-6">Account Dashboard</h1>
        <div className="bg-netflix-dark p-6 rounded-lg max-w-2xl">
          <p className="mb-2"><strong>Email:</strong> {user?.email}</p>
          <p className="mb-4"><strong>User ID:</strong> {user?.uid}</p>
          <button className="bg-netflix-red px-4 py-2 rounded hover:bg-red-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  )
}
