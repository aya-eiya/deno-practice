import { useSignal } from '@preact/signals'
import Feedback from '../scrollY/Feedback.tsx'
import { useEffect, useState } from 'preact/hooks'

export default function Sidebar({ ids }: { ids: string[] }) {
  const top = useSignal(0)
  const bottom = useSignal(0)
  const clientHeight = useSignal(0)
  const [colors, setColors] = useState([
    'text-red-500',
    'text-blue-500',
    'text-green-500',
    'text-yellow-500',
    'text-pink-500',
  ])
  const altColors = [
    'text-gray-100',
    'text-gray-100',
    'text-gray-100',
    'text-gray-100',
    'text-gray-100',
  ]
  const animeColors = [
    'text-red-500    animate-color-fade-in',
    'text-blue-500   animate-color-fade-in',
    'text-green-500  animate-color-fade-in',
    'text-yellow-500 animate-color-fade-in',
    'text-pink-500   animate-color-fade-in',
  ]
  const animeAltColors = [
    'text-red-500    animate-color-fade-out saturate-0',
    'text-blue-500   animate-color-fade-out saturate-0',
    'text-green-500  animate-color-fade-out saturate-0',
    'text-yellow-500 animate-color-fade-out saturate-0',
    'text-pink-500   animate-color-fade-out saturate-0',
  ]
  useEffect(() => {
    clientHeight.value = globalThis.innerHeight
  }, [])
  const isVisible = top.value && bottom.value && (top.value > -180 && bottom.value < 320)

  return (
    <>
      {ids.length > 0 && <Feedback scrollY={top} fromById={ids[0]} />}
      {ids.length > 1 && <Feedback scrollY={bottom} fromById={ids[ids.length - 1]} />}
      <div
        className={'fixed top-0 h-screen hidden ' +
          (isVisible ? 'md:flex animate-slide-in-left' : 'md:flex animate-slide-out-left translate-x-[-300%]') +
          ' md:w-11/12 lg:w-10/12 flex-col justify-center items-start'}
      >
        {ids.map((id, idx) => (
          <div
            key={id}
            className={'text-7xl font-bold my-2 ' +
              (top.value !== undefined &&
                  (clientHeight.value * (idx - 0.5) <= top.value && top.value <= clientHeight.value * (idx + 0.5))
                ? colors[idx % colors.length]
                : altColors[idx % altColors.length])}
          >
            {String(idx + 1).padStart(2, '0')}
          </div>
        ))}
      </div>
    </>
  )
}
