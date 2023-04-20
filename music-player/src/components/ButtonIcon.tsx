import { ReactNode, ButtonHTMLAttributes } from 'react'

type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export function ButtonIcon(props: ButtonIconProps) {
  const { children, ...attrs } = props

  return (
    <button
      className="text-gray-50 p-1 flex items-center justify-center rounded-full transition-colors hover:enabled:opacity-70 active:enabled:opacity-50 disabled:cursor-not-allowed disabled:opacity-30"
      {...attrs}
    >
      {children}
    </button>
  )
}
