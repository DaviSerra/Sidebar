'use client'

import { UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'

export function Trigger() {
  const { id } = useFileInput()

  return (
    <label
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border-zinc-300 px-6 py-4 text-center text-zinc-500 hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500"
      htmlFor={id}
    >
      <div className="group-hover:border-violet-50 group-hover:bg-violet-100 rounded-full border-6 border-zinc-50 bg-zinc-100 p-2">
        <UploadCloud className="w-5 h-5 text-zinc-600 group-hover:text-violet-600" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-start">
          <span className="font-semibold text-violet-700">Click to upload</span>{' '}
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}
