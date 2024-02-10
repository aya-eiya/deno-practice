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
          className={'rounded-full bg-white hover:bg-yellow-400 cursor-pointer w-16 h-16 m-4 flex justify-center items-center select-none'}
        >
          <span className={'block'}>
            {signal.value ? <>&#10005;</> : <>&#9776;</>}
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
      <div className={'drawer-menu absolute left-0 top-0 ' + (drawerIsOpen.value ? 'z-30' : 'hidden')}>
        {children}
      </div>
    </>
  )
}
