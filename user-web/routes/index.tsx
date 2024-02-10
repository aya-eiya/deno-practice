import { useSignal } from '@preact/signals'
import Counter from '../islands/dialog/Counter.tsx'

export default function Home() {
  const count = useSignal(3)
  const isOpen = useSignal(false)

  const mainTitle = {
    title: 'Title Logo',
    subtitle: 'Denoの練習サイト',
    fullDesc: 'Denoの練習サイトです\nDenoはV8エンジンとTypeScriptを使っています\nFreshはDenoのフレームワークです',
    image: '/logo.svg',
  }
  return (
    <div className={'w-full flex'}>
      <div className={'h-screen w-full flex flex-row'}>
        <div className={'w-1/2'}>
          <img
            className={'my-6'}
            src={mainTitle.image}
            width='128'
            height='128'
            alt='the Fresh logo: a sliced lemon dripping with juice'
          />
        </div>
        <div className={'w-1/2 flex flex-col items-center justify-center pb-24 text-red-500'}>
          <p className={'text-xl font-bold'}>{mainTitle.subtitle}</p>
          <h1 className={'text-8xl font-bold my-3'}>{mainTitle.title}</h1>
          <div className={'whitespace-pre my-5'}>
            {mainTitle.fullDesc}
          </div>
          <div className={'flex'}>
            <Counter count={count} isOpen={isOpen} />
          </div>
        </div>
      </div>
    </div>
  )
}
