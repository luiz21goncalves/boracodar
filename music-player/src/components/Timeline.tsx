export function Timeline() {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full h-2 bg-gray-200/10 relative rounded-full">
        <div className="w-4/5 h-full rounded-full absolute top-0 left-0 bg-gray-200" />
      </div>

      <div className="w-full flex flex-row items-center justify-between">
        <span>03:20</span>
        <span>00:12</span>
      </div>
    </div>
  )
}
