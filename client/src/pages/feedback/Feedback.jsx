import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons"

function Feedback() {
  const { toast } = useToast()
  const [rating, setRating] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // API call will go here
      toast({
        title: "Thank you!",
        description: "Your feedback has been submitted successfully.",
        variant: "success",
      })
      // Reset form
      e.target.reset()
      setRating(0)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex-1 p-4 md:p-8 pt-6 w-full bg-gradient-to-br from-indigo-50/50 to-pink-50/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-primary">Feedback</h2>

        <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-primary/5 rounded-t-lg">
            <CardTitle className="text-primary">Share Your Experience</CardTitle>
            <CardDescription className="text-primary/70">
              Help us improve the OD Portal by sharing your feedback
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Rating with enhanced styling */}
              <div className="space-y-2 bg-white/60 p-4 rounded-lg">
                <Label className="text-primary">Overall Experience</Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Button
                      key={star}
                      variant="ghost"
                      size="sm"
                      className="p-0 h-8 w-8 hover:bg-primary/5"
                      onClick={() => setRating(star)}
                      type="button"
                    >
                      {star <= rating ? (
                        <StarFilledIcon className="h-6 w-6 text-yellow-400" />
                      ) : (
                        <StarIcon className="h-6 w-6 text-primary/30" />
                      )}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Category with enhanced styling */}
              <div className="space-y-2 bg-white/60 p-4 rounded-lg">
                <Label className="text-primary">Feedback Category</Label>
                <Select required>
                  <SelectTrigger className="border-primary/20">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Feedback</SelectItem>
                    <SelectItem value="ui">User Interface</SelectItem>
                    <SelectItem value="process">Request Process</SelectItem>
                    <SelectItem value="bug">Bug Report</SelectItem>
                    <SelectItem value="feature">Feature Request</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Satisfaction with enhanced styling */}
              <div className="space-y-2 bg-white/60 p-4 rounded-lg">
                <Label className="text-primary">How satisfied are you with the request process?</Label>
                <RadioGroup defaultValue="neutral" className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="satisfied" id="satisfied" className="text-primary" />
                    <Label htmlFor="satisfied" className="text-primary/70">Satisfied</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="neutral" id="neutral" className="text-primary" />
                    <Label htmlFor="neutral" className="text-primary/70">Neutral</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="unsatisfied" id="unsatisfied" className="text-primary" />
                    <Label htmlFor="unsatisfied" className="text-primary/70">Unsatisfied</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Feedback with enhanced styling */}
              <div className="space-y-2 bg-white/60 p-4 rounded-lg">
                <Label htmlFor="feedback" className="text-primary">Detailed Feedback</Label>
                <Textarea
                  id="feedback"
                  placeholder="Share your thoughts, suggestions, or report issues..."
                  className="min-h-[150px] border-primary/20 focus:border-primary"
                  required
                />
              </div>

              {/* Submit Button with enhanced styling */}
              <div className="flex justify-end pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 transition-colors"
                >
                  {isSubmitting ? "Submitting..." : "Submit Feedback"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Feedback 