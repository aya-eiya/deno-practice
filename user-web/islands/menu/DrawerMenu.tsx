import { Signal, useSignal } from '@preact/signals'
import { JSX } from 'preact/jsx-runtime'

function DrawerSwitch({ signal }: { signal: Signal<boolean> }) {
  return (
    <>
      <input
        type='checkbox'
        id='drawer-switch'
        className={'hidden'}
        onChange={(e) => {
          signal.value = (e.target as HTMLInputElement).checked
        }}
      />
      <label for='drawer-switch' className={'text-3xl block z-50 relative'}>
        <div
          className={'md:rounded-full md:bg-white md:hover:bg-yellow-400 cursor-pointer w-16 h-16 md:m-4 flex justify-center items-center select-none'}
        >
          <span className={'block'}>
            {signal.value ? <>&#10005;</> : (
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
  const drawerIsOpen = useSignal(false)
  return (
    <>
      <DrawerSwitch signal={drawerIsOpen} />
      <div
        className={'drawer-menu absolute left-0 top-0 ' +
          (drawerIsOpen.value ? 'animate-fade-in z-30' : 'hidden')}
      >
        {children}
      </div>
    </>
  )
}
