import { Signal, useSignal } from '@preact/signals'
import { useEffect, useState } from 'preact/hooks'
import { JSX } from 'preact/jsx-runtime'

function DrawerSwitch({ isDrawerOpen }: { isDrawerOpen: Signal<boolean> }) {
  return (
    <>
      <input
        type='checkbox'
        id='drawer-switch'
        className={'hidden'}
        checked={isDrawerOpen.value}
        onChange={(e) => {
          isDrawerOpen.value = (e.target as HTMLInputElement).checked
          if (isDrawerOpen.value) {
            globalThis.location.hash = 'menu'
          }
        }}
      />
      <label for='drawer-switch' className={'text-3xl block z-50 relative'}>
        <div
          className={'md:rounded-full md:bg-white md:hover:bg-yellow-400 cursor-pointer w-16 h-16 md:m-4 flex justify-center items-center select-none'}
        >
          <span className={'block'}>
            {isDrawerOpen.value ? <>&#10005;</> : (
              <>
                <svg
                  viewBox='0 0 24 24'
                  stroke='black'
                  className='h-16 w-16'
                >
                  <path strokeWidth={2} d='M7 9h10M7 12h10M7 15h10M7 0z' />
                </svg>
              </>
            )}
          </span>
        </div>
      </label>
    </>
  )
}

export default function DrawerMenu({ children }: JSX.HTMLAttributes) {
  const [path, setPath] = useState<string>(String(globalThis.location))
  const isDrawerOpen = useSignal(false)
  useEffect(() => {
    const renewPath = () => {
      setPath(String(globalThis.location))
    }
    globalThis.addEventListener('hashchange', renewPath)
    return () => {
      globalThis.removeEventListener('hashchange', renewPath)
    }
  })
  useEffect(() => {
    if (new URL(path).hash === '#menu') {
      return
    }
    isDrawerOpen.value = false
  }, [path])
  return (
    <>
      <DrawerSwitch isDrawerOpen={isDrawerOpen} />
      <div
        className={'drawer-menu absolute left-0 top-0 ' +
          (isDrawerOpen.value ? 'animate-fade-in z-30' : 'hidden')}
      >
        {children}
      </div>
    </>
  )
}
