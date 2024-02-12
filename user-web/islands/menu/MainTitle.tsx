import { Signal } from '@preact/signals'
import { useEffect, useState } from 'preact/hooks'

export default function MainTitle({ title, scrollY }: { title: string; scrollY: Signal<number | undefined> }) {
  const [sw, setSw] = useState<boolean | undefined>(undefined)
  const screenH = 420
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
    <p
      className={'flex px-2 text-2xl font-bold ' +
        (sw === undefined ? 'md:hidden' : (sw ? 'md:animate-fade-out md:opacity-0' : 'md:animate-fade-in'))}
    >
      {title}
    </p>
  )
}
