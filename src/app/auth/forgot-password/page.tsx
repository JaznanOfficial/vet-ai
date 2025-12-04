"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { IconPaw, IconArrowLeft } from "@tabler/icons-react"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: Implement forgot password logic
    setTimeout(() => {
      setIsLoading(false)
      setEmailSent(true)
    }, 1000)
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-muted/30">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <IconPaw className="h-7 w-7" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">
            {emailSent ? "Check your email" : "Forgot password?"}
          </CardTitle>
          <CardDescription>
            {emailSent
              ? "We've sent you a password reset link"
              : "Enter your email to reset your password"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {emailSent ? (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                We've sent a password reset link to your email address. Please check your inbox and follow the instructions.
              </p>
              <p className="text-sm text-muted-foreground text-center">
                Didn't receive the email? Check your spam folder or{" "}
                <button
                  onClick={() => setEmailSent(false)}
                  className="text-primary hover:underline font-medium"
                >
                  try again
                </button>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  disabled={isLoading}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send reset link"}
              </Button>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Link
            href="/auth/sign-in"
            className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <IconArrowLeft className="mr-2 h-4 w-4" />
            Back to sign in
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
