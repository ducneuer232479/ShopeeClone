interface Props extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode
}

export default function RegisterLayout({ children }: Props) {
  return (
    <div>
      RegisterLayout
      {children}
    </div>
  )
}
