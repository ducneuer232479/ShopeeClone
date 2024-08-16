import React from 'react'
import CartHeader from 'src/components/CartHeader'
import Footer from 'src/components/Footer'

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode
}

export default function CartLayout({ children }: Props) {
  return (
    <div>
      <CartHeader />
      {children}
      <Footer />
    </div>
  )
}
