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
        <SelectPrimitive.Trigger className="flex w-full h-11 items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-md data-[placeholder]:text-zinc-600">
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
            className="z-10 rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width] overflow-hidden"
          >
            <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </div>
  )
}
