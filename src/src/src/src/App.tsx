import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './hooks/useAuth'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Watch from './pages/Watch'
import Browse from './pages/Browse'
import MyList from './pages/MyList'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/watch/:id" element={
            <ProtectedRoute>
              <Watch />
            </ProtectedRoute>
          } />
          <Route path="/browse" element={
            <ProtectedRoute>
              <Browse />
            </ProtectedRoute>
          } />
          <Route path="/my-list" element={
            <ProtectedRoute>
              <MyList />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
