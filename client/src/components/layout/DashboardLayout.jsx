import { useState } from "react"
import { useAuth } from "@/context/AuthContext"
import Navbar from "./Navbar"
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const { user } = useAuth()

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex h-[calc(100vh-4rem)]">
          <Sidebar>
            {/* Sidebar content */}
          </Sidebar>
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default DashboardLayout 