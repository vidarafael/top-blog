export function Skeleton() {
  return (
    <div className="bg-white rounded-md p-4 max-w-[800px] w-full mx-auto mt-8">
      <div className="animate-pulse space-x-4">
        <div className="space-y-6 py-1">
          <div className="h-12 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-4 bg-slate-200 rounded col-span-2"></div>
              <div className="h-4 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-[300px] w-full bg-slate-200 rounded"></div>
            <div className="flex flex-col gap-2 pt-4">
              <div className="h-4 bg-slate-200 rounded col-span-2"></div>
              <div className="h-4 bg-slate-200 rounded col-span-2"></div>
              <div className="h-4 bg-slate-200 rounded col-span-2"></div>
              <div className="h-4 bg-slate-200 rounded col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}