import { useSignal } from '@preact/signals'
import Feedback from '../../islands/scrollY/Feedback.tsx'
import SPFrame from '../static/SPFrame.tsx'
const featuresTitle = {
  title: 'FEATURES',
  subtitle: 'Freshの特徴',
  catch: 'Deno Deployで使える\nエッジでレンダリングを提供',
  description:
    'Node.js の開発者が パッケージ管理や安全性を改善し作成した Deno\n2022年、新しい Deno Native な Webフレームワーク Fresh がリリースされました',
  images: ['/logo.svg'],
} as const

const features = {
  feature1: {
    id: 'feature_1',
    title: 'Feature1',
    desc: '□□□ □□□ □□ □□□□ □□□ □□□ □□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□ □□',
    fullDesc:
      '□□□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□□ □□□□□□□ □□□□□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□□ □□□□□□□ □',
    figure: '/logo.svg',
  },
  feature2: {
    id: 'feature_2',
    title: 'Feature2',
    desc: '□□ □□□ □□ □□ □□□ □□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□ □□',
    fullDesc:
      '□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□ □□ □□ □□□□□ □□□ □□ □□□ □ □□□ □□□□□ □□□ □□□ □□□□ □□□ □□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□□ □□□',
    figure: '/logo.svg',
  },
  feature3: {
    id: 'feature_3',
    title: 'Feature3',
    desc: '□□ □□□ □□ □□ □□□□ □□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□ □□□ □□ □□ □□□□□ □□□ □□',
    fullDesc:
      '□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□ □□ □□ □□□□□ □□□ □□ □□□ □ □□□ □□□□□ □□□ □□□ □□□□ □□□ □□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□□ □□□',
    figure: '/logo.svg',
  },
  feature4: {
    id: 'feature_4',
    title: 'Feature4',
    desc: '□□ □□ □ □□ □□ □□□□ □□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□ □□ □□□□□ □□□ □□',
    fullDesc:
      '□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□ □□ □□ □□□□□ □□□ □□ □□□ □ □□□ □□□□□ □□□ □□□ □□□□ □□□ □□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□□ □□□',
    figure: '/logo.svg',
  },
  feature5: {
    id: 'feature_5',
    title: 'Feature5',
    desc: '□□ □□ □□□ □□ □□□□ □□ □□ □□□ □□□ □□ □□□□ □□□ □□□□□ □□ □□ □□□□□ □□ □□',
    fullDesc:
      '□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□ □□ □□ □□□□□ □□□ □□ □□□ □ □□□ □□□□□ □□□ □□□ □□□□ □□□ □□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□□ □□□',
    figure: '/logo.svg',
  },
}

export default function Features() {
  const scrollY = useSignal<number | undefined>(undefined)
  return (
    <section id={'features'} className={'w-full flex flex-col justify-center items-center'}>
      <div className={'w-full relative flex justify-center items-center mb-24'}>
        <aside className={'w-1/2 md:w-2/12 lg:w-1/5 opacity-30'}>
          <SPFrame image={'/logo.svg'} title={'Features'} />
        </aside>
        <div className={'absolute w-full h-full top-0 flex flex-col justify-center items-center'}>
          <div>
            <h1 className={'text-6xl md:text-7xl lg:text-9xl font-bold'}>{featuresTitle.title}</h1>
            <p className={'text-gray-500'}>{featuresTitle.subtitle}</p>
          </div>
        </div>
      </div>
      <h2 className={'text-2xl md:text-3xl lg:text-4xl font-bold mx-8 md:mx-auto md:w-2/3 lg:w-1/2 mb-10'}>
        □□□□□□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□□
      </h2>
      <div className={'text-xl mx-8 md:mx-auto md:w-2/3 lg:w-1/2'}>
        □□□□□□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□□ □□□□□□□ □□ □□□ □□ □□□ □□ □□□□ □□□ □□□□□ □□□ □ □□□□□□ □□ □□□□□ □□□ □□
        □□□□ □□□ □□□□□ □□□ □□□□□□□ □□ □□ □□□ □□□ □□ □□□□ □□□ □□□□□ □□□
      </div>
      <div className={'w-full flex flex-col justify-center items-center'}>
        <div
          className={'fixed top-0 h-screen hidden md:w-11/12 lg:w-10/12 flex-col justify-center items-start'}
        >
          <div className={'text-7xl font-bold my-2'}>01</div>
          <div className={'text-7xl font-bold my-2'}>02</div>
          <div className={'text-7xl font-bold my-2'}>03</div>
          <div className={'text-7xl font-bold my-2'}>04</div>
          <div className={'text-7xl font-bold my-2'}>05</div>
        </div>
        <Feedback scrollY={scrollY} fromById={features.feature1.id} />
        <Feature {...features.feature1} />
        <Feature {...features.feature2} />
        <Feature {...features.feature3} />
        <Feature {...features.feature4} />
        <Feature {...features.feature5} />
      </div>
    </section>
  )
}

function Feature({ id, title, desc, fullDesc, figure }: typeof features.feature1) {
  return (
    <section
      id={id}
      className={'mt-40 mx-8 md:mx-auto md:w-8/12 lg:w-6/12 flex flex-col justify-center items-center'}
    >
      <div className={'w-full flex flex-row justify-between'}>
        <div className={'w-1/2'}>
          <h2 className={'text-lg md:text-xl font-bold'}>{title}</h2>
          <p className={'text-lg md:text-xl lg:text-2xl font-bold mt-8'}>{desc}</p>
          <p className={'mt-8'}>{fullDesc}</p>
        </div>
        <div className={'w-1/2'}>
          <img className={'w-full'} src={figure} alt={title} />
        </div>
      </div>
    </section>
  )
}
