import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"

function TrackStatus() {
  const [filter, setFilter] = useState("all")
  
  // Mock data - replace with API call
  const requests = [
    {
      id: 1,
      date: "2024-03-15",
      event: "Tech Conference 2024",
      type: "Academic",
      venue: "Main Auditorium",
      status: "pending",
      submittedOn: "2024-03-10",
    },
    {
      id: 2,
      date: "2024-03-20",
      event: "Hackathon",
      type: "Placement",
      venue: "Lab 201",
      status: "approved",
      submittedOn: "2024-03-12",
    },
    {
      id: 3,
      date: "2024-03-25",
      event: "Workshop",
      type: "Academic",
      venue: "Seminar Hall",
      status: "rejected",
      submittedOn: "2024-03-14",
    },
  ]

  const getStatusBadge = (status) => {
    const variants = {
      pending: <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-300">Pending</Badge>,
      approved: <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">Approved</Badge>,
      rejected: <Badge variant="outline" className="bg-red-50 text-red-700 border-red-300">Rejected</Badge>,
    }
    return variants[status]
  }

  return (
    <div className="flex-1 p-4 md:p-8 pt-6 w-full bg-gradient-to-br from-blue-50/50 to-purple-50/50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary">Track Status</h2>
        
        <div className="flex items-center gap-4">
          {/* Search with enhanced styling */}
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Search requests..."
              className="w-[250px] border-primary/20 focus:border-primary/30 bg-white/80"
            />
            <Button variant="outline" size="icon" className="border-primary/20 hover:bg-primary/5">
              <Search className="h-4 w-4 text-primary/70" />
            </Button>
          </div>

          {/* Filter with enhanced styling */}
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px] border-primary/20 bg-white/80">
              <Filter className="h-4 w-4 mr-2 text-primary/70" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Requests</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary/5 hover:bg-primary/10">
                <TableHead className="text-primary/70">Date</TableHead>
                <TableHead className="text-primary/70">Event</TableHead>
                <TableHead className="text-primary/70">Type</TableHead>
                <TableHead className="text-primary/70">Venue</TableHead>
                <TableHead className="text-primary/70">Submitted On</TableHead>
                <TableHead className="text-primary/70">Status</TableHead>
                <TableHead className="text-right text-primary/70">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((request) => (
                <TableRow key={request.id} className="hover:bg-primary/5">
                  <TableCell>{request.date}</TableCell>
                  <TableCell className="font-medium text-primary">{request.event}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {request.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{request.venue}</TableCell>
                  <TableCell>{request.submittedOn}</TableCell>
                  <TableCell>{getStatusBadge(request.status)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="hover:bg-primary/10 text-primary">
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
  )
}

export default TrackStatus;
