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
import { Button } from "@/components/ui/button"
import { 
  Bell, 
  Settings, 
  Sun, 
  Moon, 
  User,
  Search
} from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function RootLayout({ children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  
  // Get navigation items based on user role
  const navItems = navigationItems[user?.role || 'student']

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen bg-background">
        {/* Top Bar */}
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-14 items-center justify-end px-6 gap-2">
            {/* Theme Toggle */}
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="h-8 w-8 relative">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
            </Button>

            {/* Settings */}
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Settings className="h-4 w-4" />
            </Button>

            {/* Profile */}
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex h-[calc(100vh-3.5rem)]">
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