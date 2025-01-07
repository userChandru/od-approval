import { useAuth } from '@/context/AuthContext'
import { 
  LayoutDashboard, FileSpreadsheet, Calendar, 
  ChartBar, MessageSquare, Settings, 
  ClipboardCheck, Users
} from 'lucide-react'

const roleNavigation = {
  student: [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard/student' },
    { name: 'Request OD', icon: FileSpreadsheet, path: '/dashboard/student/request' },
    { name: 'Track Status', icon: ClipboardCheck, path: '/dashboard/student/track' },
    { name: 'Feedback', icon: MessageSquare, path: '/dashboard/student/feedback' }
  ],
  mentor: [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard/mentor' },
    { name: 'Approve OD', icon: ClipboardCheck, path: '/dashboard/mentor/approve' },
    { name: 'View IVR', icon: Users, path: '/dashboard/mentor/ivr' },
    { name: 'Analytics', icon: ChartBar, path: '/dashboard/mentor/analytics' }
  ],
  events: [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard/events' },
    { name: 'Manage Events', icon: Calendar, path: '/dashboard/events/manage' },
    { name: 'Approvals', icon: ClipboardCheck, path: '/dashboard/events/approvals' }
  ],
  faculty: [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard/faculty' },
    { name: 'Department Analytics', icon: ChartBar, path: '/dashboard/faculty/analytics' },
    { name: 'Batch Trends', icon: ChartBar, path: '/dashboard/faculty/trends' }
  ]
}

function NavItems() {
  const { user } = useAuth()
  const navigation = roleNavigation[user?.role] || []

  return (
    <div className="space-y-1">
      {navigation.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
            isActive 
              ? "bg-primary text-primary-foreground" 
              : "hover:bg-accent hover:text-accent-foreground"
          )}
        >
          <item.icon className="h-4 w-4" />
          {item.name}
        </NavLink>
      ))}
      
      {/* Common navigation items for all roles */}
      <NavLink
        to="/settings"
        className={({ isActive }) => cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors mt-4",
          isActive 
            ? "bg-primary text-primary-foreground" 
            : "hover:bg-accent hover:text-accent-foreground"
        )}
      >
        <Settings className="h-4 w-4" />
        Settings
      </NavLink>
    </div>
  )
}

export default NavItems 