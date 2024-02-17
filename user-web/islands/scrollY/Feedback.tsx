import { Signal } from '@preact/signals'
import { useEffect } from 'preact/hooks'
import { JSX } from 'preact/jsx-runtime'

export default function Feedback({ children, scrollY, fromById }: JSX.HTMLAttributes & {
  scrollY: Signal<number | undefined>
  fromById?: string
}) {
  useEffect(() => {
    const handleScroll = () => {
      if (!fromById) {
        scrollY.value = globalThis.scrollY
        return
      }
      const d = globalThis.document.getElementById(fromById)
      if (!d) {
        scrollY.value = globalThis.scrollY
        return
      }
      scrollY.value = -d.getBoundingClientRect().top
    }

    globalThis.addEventListener('scroll', handleScroll)
    return () => {
      globalThis.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return <>{children}</>
}
