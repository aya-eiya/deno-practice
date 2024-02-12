import { Signal } from '@preact/signals'
import { useEffect, useState } from 'preact/hooks'
import { JSX } from 'preact/jsx-runtime'

export default function NaviBar({ children, scrollY }: JSX.HTMLAttributes & { scrollY: Signal<number | undefined> }) {
  const [sw, setSw] = useState<boolean | undefined>(undefined)
  const screenH = 80
  useEffect(() => {
    const { value } = scrollY
    if (value === undefined) {
      return
    }
    if (value <= screenH && sw === undefined) {
      return
    }
    setSw(value <= screenH)
  }, [scrollY.value, sw])
  return (
    <div
      className={'header-menu md:w-1/2 flex flex-row justify-between items-center py-6 ' +
        (sw === undefined ? '' : (sw ? 'md:animate-slide-down' : 'md:animate-slide-up md:translate-y-[-300%]'))}
    >
      {children}
    </div>
  )
}
