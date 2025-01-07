import { 
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarMenu,
  SidebarMenuButton
} from "@/components/ui/sidebar"
import { useLocation, useNavigate } from "react-router-dom"
import { navigationItems } from "@/config/navigation"
import { useAuth } from "@/context/AuthContext"
import Navbar from "./Navbar"

function RootLayout({ children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { user } = useAuth()
  
  // Get navigation items based on user role
  const navItems = navigationItems[user?.role || 'student']

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex h-[calc(100vh-4rem)]">
          <Sidebar>
            <SidebarHeader>
              <div className="px-2 py-4">
                <h2 className="text-lg font-semibold">OD Portal</h2>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuButton
                    key={item.path}
                    isActive={location.pathname === item.path}
                    tooltip={item.label}
                    onClick={() => navigate(item.path)}
                  >
                    {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                ))}
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default RootLayout 