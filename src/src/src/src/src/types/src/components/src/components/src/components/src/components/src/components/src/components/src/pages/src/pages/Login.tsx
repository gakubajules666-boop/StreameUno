import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmail, signInWithGoogle } from '../firebase/auth'
import toast from 'react-hot-toast'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await signInWithEmail(email, password)
      toast.success('Logged in successfully!')
      navigate('/')
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
      toast.success('Logged in with Google!')
      navigate('/')
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <div className="min-h-screen bg-netflix-black flex items-center justify-center">
      <div className="bg-black/80 p-8 rounded-md max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6">Sign In</h1>
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
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </form>
        
        <button
          onClick={handleGoogleSignIn}
          className="w-full mt-4 bg-white text-black p-3 rounded font-semibold hover:bg-gray-200 transition"
        >
          Sign in with Google
        </button>
        
        <p className="mt-4 text-center text-gray-400">
          New to StreamE Uno? <Link to="/signup" className="text-white hover:underline">Sign up now</Link>
        </p>
      </div>
    </div>
  )
}
