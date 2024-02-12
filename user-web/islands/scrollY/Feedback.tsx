import { Signal, useSignal } from '@preact/signals'
import { useEffect } from 'preact/hooks'
import { JSX } from 'preact/jsx-runtime'

export default function Feedback({ children, scrollY }: JSX.HTMLAttributes & {
  scrollY: Signal<number | undefined>
}) {
  useEffect(() => {
    const handleScroll = () => {
      scrollY.value = globalThis.window.scrollY
    }

    globalThis.addEventListener('scroll', handleScroll)

    return () => {
      globalThis.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return <>{children}</>
}
