import Navbar from '../components/Navbar'
import { useAuth } from '../hooks/useAuth'

export default function Admin() {
  const { user } = useAuth()

  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      <div className="pt-24 px-4 md:px-12">
        <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
        <div className="bg-netflix-dark p-6 rounded-lg">
          <p className="text-gray-400">Admin functionality - Add/Edit/Delete content</p>
          <p className="text-sm mt-2">Logged in as: {user?.email}</p>
        </div>
      </div>
    </div>
  )
}
