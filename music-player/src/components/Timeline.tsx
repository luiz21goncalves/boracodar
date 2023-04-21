export function Timeline() {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full h-2 bg-gray-200/10 relative rounded-full">
        <div className="w-4/5 h-full rounded-full absolute top-0 left-0 bg-gray-200" />
      </div>

      <div className="w-full flex flex-row items-center justify-between">
        <span className="font-bold text-sm text-gray-100/70">03:20</span>
        <span className="font-bold text-sm text-gray-100/70">00:12</span>
      </div>
    </div>
  )
}
