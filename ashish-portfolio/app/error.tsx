"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white text-xl font-bold">
          !
        </div>
        <h2 className="text-2xl font-bold text-orange-900 mb-4">Something went wrong!</h2>
        <p className="text-orange-700 mb-6">We encountered an error while loading the portfolio. Please try again.</p>
        <Button onClick={reset} className="bg-orange-600 hover:bg-orange-700 text-white">
          Try again
        </Button>
      </div>
    </div>
  )
}
