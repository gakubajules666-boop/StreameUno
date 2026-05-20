import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from '../firebase/auth'
import { useAuth } from '../hooks/useAuth'
import { FaSearch, FaBell, FaUser } from 'react-icons/fa'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { user } = useAuth()
  const navigate = useNavigate()

  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = async () => {
    await signOut()
    navigate('/login')
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-netflix-black shadow-md' : 'bg-gradient-to-b from-black/70 to-transparent'}`}>
      <div className="px-4 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-netflix-red text-3xl font-bold cursor-pointer" onClick={() => navigate('/')}>
            STREAME UNO
          </h1>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-gray-300 transition">Home</Link>
            <Link to="/browse" className="hover:text-gray-300 transition">Browse</Link>
            <Link to="/my-list" className="hover:text-gray-300 transition">My List</Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <FaSearch className="cursor-pointer hover:text-gray-300" />
          <FaBell className="cursor-pointer hover:text-gray-300" />
          <div className="relative">
            <div onClick={() => setShowUserMenu(!showUserMenu)} className="cursor-pointer flex items-center space-x-2">
              <FaUser className="text-white" />
              <span className="hidden md:inline">{user?.email?.split('@')[0]}</span>
            </div>
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-netflix-dark border border-gray-700 rounded-md shadow-lg">
                <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-700">Dashboard</Link>
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-700">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
