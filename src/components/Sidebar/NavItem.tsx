import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  icon: ElementType
}

export default function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      className="group flex items-center rounded px-3 py-2 gap-3 hover:bg-violet-50"
      href="#"
    >
      <Icon className="h-5 w-5 text-zinc-500 group-hover:text-violet-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500 duration-300">
        {title}
      </span>
      <ChevronDown className="ml-auto w-5 h-5 group-hover:text-violet-300 duration-300" />
    </a>
  )
}
