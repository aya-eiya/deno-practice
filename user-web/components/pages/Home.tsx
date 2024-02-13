import { useSignal } from '@preact/signals'
import Counter from '../../islands/dialog/Counter.tsx'
import SPFrame from '../static/SPFrame.tsx'

const mainTitle = {
  title: 'Title Logo',
  subtitle: 'Denoの練習サイト',
  fullDesc: 'Denoの練習サイトです\nDenoはV8エンジンとTypeScriptを使っています\nFreshはDenoのフレームワークです',
  image: '/logo.svg',
} as const

export default function Home() {
  const count = useSignal(3)
  const isOpen = useSignal(false)
  return (
    <section id={'home'} className={'md:h-screen w-full flex flex-col-reverse md:flex-row bg-gray-50'}>
      <aside className={'w-full md:w-1/2 h-[50vh] md:h-auto'}>
        <div className={'h-full w-full overflow-hidden flex flex-row md:-ml-8'}>
          {[1, 2, 3, 4].map((_, i) => (
            <div
              className={'my-6 w-1/4 pr-6'}
            >
              {[...Array(6)].map((_) => (
                <>
                  <SPFrame image={mainTitle.image} title={mainTitle.title} reverse={i % 2 === 0} />
                  <hr className={'h-4 invisible'} />
                </>
              ))}
            </div>
          ))}
        </div>
      </aside>
      <div
        className={'w-full md:w-1/2 h-[50vh] md:h-auto flex flex-col items-center justify-center pb-24 text-red-500 mt-32'}
      >
        <p className={'text-lg sm:text-xl font-bold'}>{mainTitle.subtitle}</p>
        <h1 className={'text-4xl sm:text-8xl md:text-6xl lg:text-8xl font-bold my-3'}>{mainTitle.title}</h1>
        <div className={'whitespace-pre my-5'}>
          {mainTitle.fullDesc}
        </div>
        <div className={'flex'}>
          <Counter count={count} isOpen={isOpen} />
        </div>
      </div>
    </section>
  )
}
