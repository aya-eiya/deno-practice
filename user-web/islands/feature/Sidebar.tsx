import { useSignal } from '@preact/signals'
import Feedback from '../scrollY/Feedback.tsx'

export default function Sidebar({ ids }: { ids: string[] }) {
  const top = useSignal(undefined)
  const bottom = useSignal(undefined)
  return (
    <>
      {ids.length > 0 && <Feedback scrollY={top} fromById={ids[0]} />}
      {ids.length > 1 && <Feedback scrollY={bottom} fromById={ids[ids.length - 1]} />}
      <div
        className={'fixed top-0 h-screen hidden ' +
          (top.value && bottom.value && (top.value > -180 && bottom.value < 320) ? 'md:flex' : '') +
          ' md:w-11/12 lg:w-10/12 flex-col justify-center items-start'}
      >
        {ids.map((id, idx) => <div className={'text-7xl font-bold my-2'}>{String(idx + 1).padStart(2, '0')}</div>)}
        {top.value} - {bottom.value} - {globalThis.screenY}
      </div>
    </>
  )
}
