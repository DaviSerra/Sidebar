/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps } from 'react'

interface TextAreaProps extends ComponentProps<'textarea'> {}

export function TextArea({ ...props }: TextAreaProps) {
  return (
    <textarea
      className="min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-6 py-2 shadow-sm outline-none"
      id="bio"
      {...props}
    />
  )
}
