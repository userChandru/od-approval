import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toast } from "@/components/ui/toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [showRoleDialog, setShowRoleDialog] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const user = await login({
        email: e.target.email.value,
        password: e.target.password.value,
      });

      // Redirect based on role
      const dashboardPath = `/dashboard/${user.role}`;
      navigate(dashboardPath);
    } catch (err) {
      setError("Invalid credentials");
      setShowToast(true);
    } finally {
      setLoading(false);
    }
  };

  // const handleGoogleSignIn = async () => {
  //   setLoading(true);
  //   try {
  //     // TODO: Implement actual Google Sign-in
  //     const user = await login({ provider: "google" });
  //     navigate(`/dashboard/${user.role}`);
  //   } catch (err) {
  //     setError("Failed to sign in with Google");
  //     setShowToast(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleGoogleSignIn = () => {
    // Show role selection dialog instead of actual Google sign-in
    setShowRoleDialog(true)
  }

  const handleRoleSelect = (role) => {
    console.log("Role selected:", role); // Debug log
    setLoading(true);
    try {
      login({ role });
      const routes = {
        student: '/dashboard/student',
        mentor: '/dashboard/mentor',
        events: '/dashboard/events',
        faculty: '/dashboard/faculty'
      };
      console.log("Navigating to:", routes[role]); // Debug log
      navigate(routes[role]);
    } catch (err) {
      console.error("Error:", err); // Debug log
      setError("Failed to set role");
      setShowToast(true);
    } finally {
      setLoading(false);
      setShowRoleDialog(false);
    }
  };

  return (
    <div className=" w-screen h-screen">
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left Side - Hero Section */}
        <div className="flex-1 bg-primary p-8 text-primary-foreground flex flex-col justify-center items-center md:items-start">
          <div className="max-w-xl space-y-6 ml-20">
            <h1 className="text-4xl md:text-5xl font-bold">OD Portal</h1>
            <p className="text-lg md:text-xl opacity-90">
              Streamline your On-Duty requests and approvals in one place
            </p>
            <div className="space-y-4 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                <p>Easy request submission</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                <p>Real-time status tracking</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                <p>Instant notifications</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Section */}
        <div className="flex-1 p-8 flex items-center justify-center  mb-[170px]">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center space-y-2">
              {/* College Header */}
              <div className="flex items-center gap-4 mb-[80px]">
                <img src="/bit-logo.png" alt="BIT Logo" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Welcome back
              </h2>
              <p className="text-sm text-muted-foreground">
                Sign in with your college email to continue
              </p>
            </div>

            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full h-12 relative bg-white"
                onClick={handleGoogleSignIn}
                loading={loading}
              >
                {!loading && (
                  <div className="absolute left-4">
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                  </div>
                )}
                Sign in with Google
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    College Email Required
                  </span>
                </div>
              </div>
            </div>

            {/* <p className="text-center text-sm text-muted-foreground">
              By signing in, you agree to our{" "}
              <a
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>
            </p> */}
          </div>
        </div>

        {showToast && (
          <Toast
            type="error"
            message={error}
            onClose={() => setShowToast(false)}
          />
        )}
      </div>

      {/* Add only the role selection dialog */}
      <Dialog open={showRoleDialog} onOpenChange={setShowRoleDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Your Role</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Select onValueChange={handleRoleSelect}>
              <SelectTrigger>
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="mentor">Mentor</SelectItem>
                <SelectItem value="events">Events Coordinator</SelectItem>
                <SelectItem value="faculty">Faculty</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Login;
