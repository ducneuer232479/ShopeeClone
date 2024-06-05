import React, { InputHTMLAttributes } from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>
  rules?: RegisterOptions
  classNameInput?: string
  classNameError?: string
}

export default function Input({
  errorMessage,
  className,
  name,
  register,
  rules,
  classNameInput = 'w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm',
  classNameError = 'mt-1 text-red-600 text-sm min-h-[1.25rem]',
  ...rest
}: Props) {
  const registerResult = register && name ? register(name, rules) : null
  return (
    <div className={className}>
      <input className={classNameInput} {...registerResult} {...rest} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
