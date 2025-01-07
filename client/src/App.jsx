import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import Login from './pages/auth/Login'
import RootLayout from './components/layout/RootLayout'
import StudentDashboard from './pages/dashboard/StudentDashboard'
import MentorDashboard from './pages/dashboard/MentorDashboard'
import EventsDashboard from './pages/dashboard/EventsDashboard'
import FacultyDashboard from './pages/dashboard/FacultyDashboard'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes */}
          <Route element={
            <ProtectedRoute>
              <RootLayout />
            </ProtectedRoute>
          }>
            <Route path="/dashboard">
              <Route path="student" element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentDashboard />
                </ProtectedRoute>
              } />
              <Route path="mentor" element={
                <ProtectedRoute allowedRoles={['mentor']}>
                  <MentorDashboard />
                </ProtectedRoute>
              } />
              <Route path="events" element={
                <ProtectedRoute allowedRoles={['events']}>
                  <EventsDashboard />
                </ProtectedRoute>
              } />
              <Route path="faculty" element={
                <ProtectedRoute allowedRoles={['faculty']}>
                  <FacultyDashboard />
                </ProtectedRoute>
              } />
            </Route>
          </Route>

          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
