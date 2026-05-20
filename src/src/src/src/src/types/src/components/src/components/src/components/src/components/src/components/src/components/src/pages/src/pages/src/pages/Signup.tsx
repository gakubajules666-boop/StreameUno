import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmail } from '../firebase/auth'
import toast from 'react-hot-toast'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await createUserWithEmail(email, password)
      toast.success('Account created successfully!')
      navigate('/')
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-netflix-black flex items-center justify-center">
      <div className="bg-black/80 p-8 rounded-md max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-700 rounded text-white"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-6 bg-gray-700 rounded text-white"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-netflix-red text-white p-3 rounded font-semibold hover:bg-red-700 transition"
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
        </form>
        
        <p className="mt-4 text-center text-gray-400">
          Already have an account? <Link to="/login" className="text-white hover:underline">Sign in now</Link>
        </p>
      </div>
    </div>
  )
}
