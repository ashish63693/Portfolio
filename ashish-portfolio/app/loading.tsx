export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-xl font-bold animate-pulse">
          AM
        </div>
        <p className="text-orange-700 font-medium">Loading portfolio...</p>
      </div>
    </div>
  )
}
