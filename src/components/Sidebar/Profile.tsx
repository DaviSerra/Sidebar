import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export default function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        className="h-10 w-10 rounded-full"
        src="https://github.com/DaviSerra.png"
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">John Doe</span>
        <span className="truncate text-sm text-zinc-500">
          John@outlook.com.br
        </span>
      </div>

      <Button variant="ghost" type="button">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </Button>
    </div>
  )
}
