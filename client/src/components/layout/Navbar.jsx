import { SidebarTrigger } from "@/components/ui/sidebar"

function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4">
        <SidebarTrigger className="lg:hidden" />
        <div className="ml-4 flex-1">
          <h1 className="text-xl font-semibold">OD Portal</h1>
        </div>
        {/* Profile and notifications will be added here */}
      </div>
    </nav>
  )
}

export default Navbar 