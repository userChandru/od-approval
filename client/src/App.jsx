import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import Login from './pages/auth/Login'
import RootLayout from './components/layout/RootLayout'
import StudentDashboard from './pages/dashboard/StudentDashboard'
import MentorDashboard from './pages/dashboard/MentorDashboard'
import EventsDashboard from './pages/dashboard/EventsDashboard'
import FacultyDashboard from './pages/dashboard/FacultyDashboard'
import RequestOD from './pages/request/RequestOD'
import TrackStatus from './pages/track/TrackStatus'
import Feedback from './pages/feedback/Feedback'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes with RootLayout */}
          <Route 
            element={
              <ProtectedRoute>
                <RootLayout>
                  <Outlet />
                </RootLayout>
              </ProtectedRoute>
            }
          >
            {/* Dashboard Routes */}
            <Route path="/dashboard">
              <Route 
                path="student" 
                element={
                  <ProtectedRoute allowedRoles={['student']}>
                    <StudentDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="mentor" 
                element={
                  <ProtectedRoute allowedRoles={['mentor']}>
                    <MentorDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="events" 
                element={
                  <ProtectedRoute allowedRoles={['events']}>
                    <EventsDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="faculty" 
                element={
                  <ProtectedRoute allowedRoles={['faculty']}>
                    <RootLayout>
                      <FacultyDashboard />
                    </RootLayout>
                  </ProtectedRoute>
                } 
              />
            </Route>
          </Route>

          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route 
            path="/dashboard/student/request" 
            element={
              <ProtectedRoute allowedRoles={['student']}>
                <RootLayout>
                  <RequestOD />
                </RootLayout>
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/dashboard/student/track" 
            element={
              <ProtectedRoute allowedRoles={['student']}>
                <RootLayout>
                  <TrackStatus />
                </RootLayout>
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/dashboard/student/feedback" 
            element={
              <ProtectedRoute allowedRoles={['student']}>
                <RootLayout>
                  <Feedback />
                </RootLayout>
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
