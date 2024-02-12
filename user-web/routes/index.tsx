import { useSignal } from '@preact/signals'
import Counter from '../islands/dialog/Counter.tsx'
import SPFrame from '../components/SPFrame.tsx'

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
    <div className={'w-full flex flex-col'}>
      <div id={'top'} className={'h-screen w-full flex flex-row bg-gray-50'}>
        <div className={'w-1/2'}>
          <div className={'h-full w-full overflow-hidden flex flex-row'}>
            <div
              className={'my-6 w-1/4 -ml-8 pr-6'}
            >
              <SPFrame image={mainTitle.image} title={mainTitle.title} />
              <hr className={'h-4 invisible'} />
              <SPFrame image={mainTitle.image} title={mainTitle.title} />
              <hr className={'h-4 invisible'} />
              <SPFrame image={mainTitle.image} title={mainTitle.title} />
              <hr className={'h-4 invisible'} />
              <SPFrame image={mainTitle.image} title={mainTitle.title} />
              <hr className={'h-4 invisible'} />
              <SPFrame image={mainTitle.image} title={mainTitle.title} />
            </div>
            <div
              className={'my-6 w-1/4 pr-6'}
            >
              <SPFrame image={mainTitle.image} title={mainTitle.title} reverse />
              <hr className={'h-4 invisible'} />
              <SPFrame image={mainTitle.image} title={mainTitle.title} reverse />
              <hr className={'h-4 invisible'} />
              <SPFrame image={mainTitle.image} title={mainTitle.title} reverse />
              <hr className={'h-4 invisible'} />
              <SPFrame image={mainTitle.image} title={mainTitle.title} reverse />
              <hr className={'h-4 invisible'} />
              <SPFrame image={mainTitle.image} title={mainTitle.title} reverse />
            </div>
            <div
              className={'my-6 w-1/4 pr-6'}
            >
              <SPFrame image={mainTitle.image} title={mainTitle.title} />
              <hr className={'h-4 invisible'} />
              <SPFrame image={mainTitle.image} title={mainTitle.title} />
              <hr className={'h-4 invisible'} />
              <SPFrame image={mainTitle.image} title={mainTitle.title} />
              <hr className={'h-4 invisible'} />
              <SPFrame image={mainTitle.image} title={mainTitle.title} />
              <hr className={'h-4 invisible'} />
              <SPFrame image={mainTitle.image} title={mainTitle.title} />
            </div>
            <div
              className={'my-6 w-1/4 pr-6'}
            >
              <SPFrame image={mainTitle.image} title={mainTitle.title} reverse />
              <hr className={'h-4 invisible'} />
              <SPFrame image={mainTitle.image} title={mainTitle.title} reverse />
              <hr className={'h-4 invisible'} />
              <SPFrame image={mainTitle.image} title={mainTitle.title} reverse />
              <hr className={'h-4 invisible'} />
              <SPFrame image={mainTitle.image} title={mainTitle.title} reverse />
              <hr className={'h-4 invisible'} />
              <SPFrame image={mainTitle.image} title={mainTitle.title} reverse />
            </div>
          </div>
        </div>
        <div className={'w-1/2 flex flex-col items-center justify-center pb-24 text-red-500 mt-32'}>
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
      <div id={'about'} className={'h-screen w-full flex flex-row'}></div>
    </div>
  )
}
