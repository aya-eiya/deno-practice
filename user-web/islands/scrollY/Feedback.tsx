import { Signal, useSignal } from '@preact/signals'
import { useEffect } from 'preact/hooks'
import { JSX } from 'preact/jsx-runtime'

export default function Feedback({ children, scrollY, fromById }: JSX.HTMLAttributes & {
  scrollY: Signal<number | undefined>
  fromById?: string
}) {
  useEffect(() => {
    const handleScroll = () => {
      const d = globalThis.document.getElementById('fromById')
      const positionY = d?.getBoundingClientRect().top ?? 0
      scrollY.value = globalThis.scrollY - positionY
    }

    globalThis.addEventListener('scroll', handleScroll)

    return () => {
      globalThis.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return <>{children}</>
}
