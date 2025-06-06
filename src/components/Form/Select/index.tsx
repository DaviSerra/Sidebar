import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

export interface SelectProps extends SelectPrimitive.SelectProps {
  children: React.ReactNode
  placeholder: string
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <div>
      <SelectPrimitive.Root {...props}>
        <SelectPrimitive.Trigger className="flex w-full h-11 items-center outline-none justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-md data-[placeholder]:text-zinc-600 focus:border-violet-300 focus:ring-4 focus:ring-violet-100">
          <SelectPrimitive.Value
            placeholder={placeholder}
            className="text-black outline-none "
          />
          <SelectPrimitive.Icon>
            <ChevronDown className="h-5 w-5 text-zinc-500" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            side="bottom"
            position="popper"
            sideOffset={8}
            className="z-10 rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width] overflow-hidden animate-slideDownAndFade"
          >
            <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </div>
  )
}
