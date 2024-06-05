import React, { forwardRef, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classNameInput?: string
  classNameError?: string
}

const InputNumber = forwardRef<HTMLInputElement, Props>(function InputNumberInner(
  {
    errorMessage,
    className,
    classNameInput = 'w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm',
    onChange,
    classNameError = 'mt-1 text-red-600 text-sm min-h-[1.25rem]',
    ...rest
  },
  ref
) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if ((/^\d+$/.test(value) || value === '') && onChange) {
      onChange(event)
    }
  }
  return (
    <div className={className}>
      <input className={classNameInput} {...rest} onChange={handleChange} ref={ref} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
})

export default InputNumber
