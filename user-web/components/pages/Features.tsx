import SPFrame from '../static/SPFrame.tsx'
import Sidebar from '../../islands/feature/Sidebar.tsx'
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
} as const

export default function Features() {
  const { feature1, feature2, feature3, feature4, feature5 } = features
  const ids = [feature1, feature2, feature3, feature4, feature5].map(({ id }) => id)
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
        <Sidebar ids={ids} />
        <Feature feature={feature1} />
        <Feature feature={feature2} />
        <Feature feature={feature3} />
        <Feature feature={feature4} />
        <Feature feature={feature5} />
      </div>
    </section>
  )
}

function Feature(
  { feature: { id, title, desc, fullDesc, figure } }: { feature: typeof features[keyof typeof features] },
) {
  return (
    <section
      id={id}
      className={'h-screen md:mx-auto md:w-8/12 lg:w-6/12 flex flex-col justify-center items-center'}
    >
      <div className={'w-full flex flex-row justify-between px-8 md:px-0'}>
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
