import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-xl font-bold">
          404
        </div>
        <h2 className="text-2xl font-bold text-orange-900 mb-4">Page Not Found</h2>
        <p className="text-orange-700 mb-6">The page you're looking for doesn't exist or has been moved.</p>
        <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}
