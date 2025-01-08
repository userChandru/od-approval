import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Upload } from "lucide-react";
import { cn } from "@/lib/utils";

function RequestOD() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [date, setDate] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // API call will go here
      // await submitODRequest(formData)

      toast({
        title: "Success",
        description: "Your OD request has been submitted successfully.",
        variant: "success",
      });

      // Redirect to track status page after successful submission
      navigate("/dashboard/student/track");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit OD request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    // Navigate back to dashboard
    navigate("/dashboard/student");
  };

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Request On-Duty Leave
        </h2>
      </div>

      <Card className="border-t-4 border-t-primary bg-gradient-to-br from-blue-50/50 to-purple-50/50">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4 bg-white/60 p-4 rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="event" className="text-primary">
                    Event Name
                  </Label>
                  <Input
                    id="event"
                    placeholder="Enter event name"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-primary">Event Type</Label>
                  <Select>
                    <SelectTrigger className="border-primary/20 focus:border-primary">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="academic">Academic</SelectItem>
                      <SelectItem value="placement">Placement</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-primary">Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal border-primary/20",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="venue" className="text-primary">
                    Venue
                  </Label>
                  <Input
                    id="venue"
                    placeholder="Enter event venue"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4 bg-white/60 p-4 rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-primary">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Provide details about the event"
                    className="min-h-[120px] border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-4">
                  <Label className="text-primary">Supporting Documents</Label>
                  <div className="border-2 border-dashed border-primary/20 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-primary/60" />
                    <div className="text-sm text-primary/80">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                      <div className="mt-1">PDF, JPG or PNG (max. 5MB)</div>
                    </div>
                  </div>
                </div>

                {/* Additional Fields */}
                <div className="space-y-2">
                  <Label htmlFor="coordinator" className="text-primary">
                    Event Coordinator
                  </Label>
                  <Input
                    id="coordinator"
                    placeholder="Enter coordinator name"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-primary">
                    Contact Number
                  </Label>
                  <Input
                    id="contact"
                    placeholder="Enter contact number"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
              </div>
            </div>

            {/* Submit Buttons - Full Width */}
            <div className="flex justify-end space-x-4 pt-4 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                disabled={isSubmitting}
                className="border-primary/20 hover:bg-primary/5"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default RequestOD;
