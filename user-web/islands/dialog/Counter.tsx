import type { Signal } from '@preact/signals'
import { Button } from '../../components/Button.tsx'
import { useEffect, useRef } from 'preact/hooks'

interface CounterProps {
  count: Signal<number>
  isOpen: Signal<boolean>
}

export default function Counter({
  count,
  isOpen,
}: CounterProps) {
  const ref = useRef<HTMLDialogElement | null>(null)
  useEffect(() => {
    if (isOpen.value) {
      ref.current?.showModal()
    } else {
      ref.current?.close()
    }
  }, [isOpen.value])
  return (
    <>
      <Button onClick={() => isOpen.value = !isOpen.value}>Open Counter</Button>

      <div class='mx-auto max-w-screen-md'>
        <dialog ref={ref} className={'backdrop-blur-2xl backdrop-filter w-2/6'}>
          <header>
            <div className={'flex flex-row justify-between'}>
              <div className={'p-3'}>🔔</div>
              <div className={'p-3'}>Counter</div>
              <div>
                <Button className={'border-none p-3'} onClick={() => isOpen.value = false}>
                  <p>x</p>
                </Button>
              </div>
            </div>
          </header>
          <div class='flex gap-8 py-6 justify-center'>
            <Button onClick={() => count.value -= 1}>-1</Button>
            <p class='text-3xl tabular-nums'>{count}</p>
            <Button onClick={() => count.value += 1}>+1</Button>
          </div>
        </dialog>
      </div>
    </>
  )
}
