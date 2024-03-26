import React, { useRef, useState, useId, ElementType } from 'react'
import { useFloating, FloatingPortal, arrow, shift, offset } from '@floating-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  children: React.ReactNode
  renderPopover: React.ReactNode
  className?: string
  as?: ElementType
  initialOpen?: boolean
}

export default function Popover({ children, renderPopover, className, as: Element = 'div', initialOpen }: Props) {
  const [open, setOpen] = useState(initialOpen || false)
  const arrowRef = useRef<HTMLDivElement>(null)
  const id = useId()
  const { refs, floatingStyles, middlewareData, x, y } = useFloating({
    middleware: [
      offset(6),
      shift(),
      arrow({
        element: arrowRef
      })
    ]
  })
  const showPopover = () => {
    setOpen(true)
  }
  const hidePopover = () => {
    setOpen(false)
  }
  return (
    <Element className={className} ref={refs.setReference} onMouseEnter={showPopover} onMouseLeave={hidePopover}>
      {children}
      <FloatingPortal id={id}>
        <AnimatePresence>
          {open && (
            <motion.div
              ref={refs.setFloating}
              style={{
                ...floatingStyles,
                top: y ?? 0,
                left: x ?? 0,
                transformOrigin: `${middlewareData.arrow?.x}px top`
              }}
              initial={{ opacity: 0, transform: 'scale(0)' }}
              animate={{ opacity: 1, transform: 'scale(1)' }}
              exit={{ opacity: 0, transform: 'scale(0)' }}
              transition={{ duration: 0.2 }}
            >
              <div
                ref={arrowRef}
                className='border-[11px] border-t-transparent border-x-transparent border-b-white translate-y-[-95%] z-10'
                style={{
                  position: 'absolute',
                  left: middlewareData.arrow?.x,
                  top: middlewareData.arrow?.y
                }}
              />
              {renderPopover}
              {/* <div className='relative bg-white border border-gray-200 rounded-sm shadow-md'>
                <div className='flex flex-col px-3 py-2'>
                  <button className='px-3 py-2 hover:text-orange'>Tiếng Việt</button>
                  <button className='px-3 py-2 mt-2 hover:text-orange'>English</button>
                </div>
              </div> */}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </Element>
  )
}
