import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Clock, CheckCircle2, XCircle, AlertCircle } from "lucide-react"

function FacultyDashboard() {
  // Mock data - replace with API calls
  const stats = {
    pending: 5,
    approved: 12,
    rejected: 3,
    total: 20
  }

  const recentRequests = [
    {
      id: 1,
      studentName: "John Doe",
      studentId: "20CS101",
      event: "Tech Conference 2024",
      date: "2024-03-15",
      type: "Academic",
      status: "pending"
    },
    {
      id: 2,
      studentName: "Jane Smith",
      studentId: "20CS102",
      event: "Hackathon",
      date: "2024-03-20",
      type: "Placement",
      status: "pending"
    },
    // Add more mock data as needed
  ]

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        {/* Pending Requests */}
        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-none">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-yellow-800">
              Pending Requests
            </CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-900">{stats.pending}</div>
            <p className="text-xs text-yellow-700 mt-1">Awaiting your review</p>
          </CardContent>
        </Card>

        {/* Approved Requests */}
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-none">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-green-800">
              Approved Requests
            </CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">{stats.approved}</div>
            <p className="text-xs text-green-700 mt-1">In the last 30 days</p>
          </CardContent>
        </Card>

        {/* Rejected Requests */}
        <Card className="bg-gradient-to-br from-red-50 to-rose-50 border-none">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-red-800">
              Rejected Requests
            </CardTitle>
            <XCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-900">{stats.rejected}</div>
            <p className="text-xs text-red-700 mt-1">In the last 30 days</p>
          </CardContent>
        </Card>

        {/* Total Requests */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-none">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-blue-800">
              Total Requests
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">{stats.total}</div>
            <Progress value={(stats.approved + stats.rejected) / stats.total * 100} 
              className="h-2 mt-2" 
            />
            <p className="text-xs text-blue-700 mt-1">
              {Math.round((stats.approved + stats.rejected) / stats.total * 100)}% processed
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Pending Requests Table */}
      <Card className="border-t-4 border-t-primary">
        <CardHeader>
          <CardTitle>Pending Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{request.studentName}</div>
                      <div className="text-sm text-muted-foreground">{request.studentId}</div>
                    </div>
                  </TableCell>
                  <TableCell>{request.event}</TableCell>
                  <TableCell>{request.date}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="capitalize">
                      {request.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-300">
                      Pending
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm" className="border-green-200 hover:bg-green-50 text-green-700">
                        Approve
                      </Button>
                      <Button variant="outline" size="sm" className="border-red-200 hover:bg-red-50 text-red-700">
                        Reject
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default FacultyDashboard 