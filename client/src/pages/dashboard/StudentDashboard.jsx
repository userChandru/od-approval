import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  CalendarDays, 
  Clock, 
  FileSpreadsheet, 
  TrendingUp,
  Calendar,
  CheckCircle2,
  XCircle,
  AlertCircle,
  PlusCircle,
  Bell,
  FileText,
  Calendar as CalendarIcon
} from "lucide-react"

function StudentDashboard() {
  // Mock data - will be replaced with API calls
  const recentRequests = [
    {
      id: 1,
      date: "2024-03-15",
      event: "Tech Conference 2024",
      status: "pending",
      type: "academic"
    },
    {
      id: 2,
      date: "2024-03-10",
      event: "Hackathon",
      status: "approved",
      type: "placement"
    },
    {
      id: 3,
      date: "2024-03-05",
      event: "Workshop",
      status: "rejected",
      type: "academic"
    }
  ]

  // Mock upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "IEEE Conference",
      date: "Mar 25",
      type: "academic",
      location: "Main Auditorium"
    },
    {
      id: 2,
      title: "Campus Interview - TCS",
      date: "Mar 28",
      type: "placement",
      location: "Seminar Hall"
    },
    {
      id: 3,
      title: "Technical Workshop",
      date: "Apr 02",
      type: "academic",
      location: "Lab 201"
    }
  ]

  const getStatusBadge = (status) => {
    const styles = {
      pending: "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-null",
      approved: "bg-green-100 text-green-800 border-green-200 hover:bg-null",
      rejected: "bg-red-100 text-red-800 border-red-200 hover:bg-null"
    }
    const icons = {
      pending: <AlertCircle className="h-4 w-4 mr-1" />,
      approved: <CheckCircle2 className="h-4 w-4 mr-1" />,
      rejected: <XCircle className="h-4 w-4 mr-1" />
    }
    return (
      <Badge className={`${styles[status]} flex items-center`}>
        {icons[status]}
        {status}
      </Badge>
    )
  }

  return (
    <div className="flex gap-6 h-full">
      {/* Main Content - Left Side (70%) - Fixed */}
      <div className="flex-[7] space-y-6 overflow-hidden">
        {/* Stats Cards - Fixed */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
              <Clock className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700">3</div>
              <p className="text-xs text-blue-600">
                +2 since last week
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total OD Days</CardTitle>
              <CalendarDays className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">12</div>
              <div className="mt-2 space-y-2">
                <p className="text-xs text-green-600">4 days remaining this semester</p>
                <Progress value={75} className="h-2 bg-green-200" indicatorClassName="bg-green-500" />
              </div>
            </CardContent>  
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
              <Calendar className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-700">7</div>
              <p className="text-xs text-purple-600">
                In next 30 days
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approval Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-700">85%</div>
              <div className="mt-2 space-y-2">
                <Progress value={85} className="h-2 bg-orange-200" indicatorClassName="bg-orange-500" />
                <p className="text-xs text-orange-600">
                  Based on last 10 requests
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Requests Table - Fixed */}
        <Card className="border">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Requests</CardTitle>
              <p className="text-sm text-muted-foreground">
                Your last 3 OD requests and their status
              </p>
            </div>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Event</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>{request.date}</TableCell>
                    <TableCell className="font-medium">{request.event}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="capitalize">
                        {request.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{getStatusBadge(request.status)}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="hover:bg-primary/5">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Right Sidebar (30%) - Scrollable */}
      <div className="flex-[3] space-y-6 overflow-y-auto pr-4 max-h-[calc(100vh-7rem)]">
        {/* Quick Actions */}
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-none">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-purple-900">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start bg-white/50 hover:bg-white/80 transition-colors" size="sm">
              <PlusCircle className="mr-2 h-4 w-4 text-purple-600" />
              New OD Request
            </Button>
            <Button variant="outline" className="w-full justify-start bg-white/50 hover:bg-white/80 transition-colors" size="sm">
              <Bell className="mr-2 h-4 w-4 text-purple-600" />
              View Notifications
            </Button>
            <Button variant="outline" className="w-full justify-start bg-white/50 hover:bg-white/80 transition-colors" size="sm">
              <FileText className="mr-2 h-4 w-4 text-purple-600" />
              Download Reports
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-none">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium text-blue-900">Upcoming Events</CardTitle>
            <CalendarIcon className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id}
                className="flex items-start space-x-4 rounded-lg bg-white/50 p-3 hover:bg-white/80 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg">
                  <span className="text-sm font-semibold text-blue-900">{event.date}</span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none text-blue-900">{event.title}</p>
                  <div className="flex items-center text-xs text-blue-700">
                    <Badge variant="outline" className="mr-2 capitalize bg-blue-100 text-blue-700 border-blue-200">
                      {event.type}
                    </Badge>
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* OD Usage Summary */}
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-none">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-green-900">OD Usage Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-green-700">Academic</span>
                <span className="font-medium text-green-900">8/15 days</span>
              </div>
              <Progress value={53} className="h-2 bg-green-200" indicatorClassName="bg-green-600" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-green-700">Placement</span>
                <span className="font-medium text-green-900">4/10 days</span>
              </div>
              <Progress value={40} className="h-2 bg-green-200" indicatorClassName="bg-green-600" />
            </div>
            <div className="mt-4 rounded-lg bg-white/50 p-2">
              <p className="text-xs text-green-700">
                You have used 12 out of 25 total OD days this semester
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default StudentDashboard