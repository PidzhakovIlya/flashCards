import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType> = {
  as?: T
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export function Button<T extends ElementType>({
  as,
  className,
  fullWidth,
  variant = 'primary',
  ...restProps
}: ButtonProps<T>) {
  const Component = as ?? 'button'

  return (
    <Component
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...restProps}
    />
  )
}
