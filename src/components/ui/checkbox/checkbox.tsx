import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
// import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

type Props = {
  label?: string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = ({ checked, id, label, onCheckedChange, ...restProps }: Props) => {
  return (
    <div>
      <CheckboxRadix.Root
        checked={checked}
        className={s.CheckboxRoot}
        id={id}
        onCheckedChange={onCheckedChange}
        {...restProps}
      >
        <CheckboxRadix.Indicator className={s.checkbox}>
          {/*<CheckIcon />*/}1
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      <label className={'ml-2'} htmlFor={id}>
        {label && <Typography as={'label'} variant={'body2'} />}
      </label>
    </div>
  )
}
// type RadixProps = {
//   asChild: boolean
//   checked?: 'indeterminate' | boolean
//   defaultChecked: 'indeterminate' | boolean
//   disabled: boolean
//   name?: string
//   onCheckedChange: () => void
//   required: boolean
//   value: string
// }
