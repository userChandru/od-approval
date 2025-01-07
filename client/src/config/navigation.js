import {
  LayoutDashboard,
  FileSpreadsheet,
  ClipboardCheck,
  MessageSquare,
  Users,
  ChartBar,
  Calendar,
  Settings
} from "lucide-react"

export const navigationItems = {
  student: [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard/student"
    },
    {
      label: "Request OD",
      icon: FileSpreadsheet,
      path: "/dashboard/student/request"
    },
    {
      label: "Track Status",
      icon: ClipboardCheck,
      path: "/dashboard/student/track"
    },
    {
      label: "Feedback",
      icon: MessageSquare,
      path: "/dashboard/student/feedback"
    }
  ],
  mentor: [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard/mentor"
    },
    {
      label: "Approve OD",
      icon: ClipboardCheck,
      path: "/dashboard/mentor/approve"
    },
    {
      label: "View IVR",
      icon: Users,
      path: "/dashboard/mentor/ivr"
    },
    {
      label: "Analytics",
      icon: ChartBar,
      path: "/dashboard/mentor/analytics"
    }
  ]
} 