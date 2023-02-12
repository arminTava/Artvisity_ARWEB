import React from 'react'

export default function LoadingItem() {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-md w-full mx-auto">
    <div className="animate-pulsecustom flex flex-col space-x-4 items-center justify-center">
      <div className="rounded-xl bg-slate-200 h-32 w-32"></div>
      <div className=" w-full space-y-6 py-5">
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  </div>  )
}
