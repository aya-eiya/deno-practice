import SPFrame from '../static/SPFrame.tsx'

const aboutTitle = {
  title: 'About Fresh',
  subtitle: 'Freshについて',
  catch: 'Deno Deployで使える\nエッジでレンダリングを提供',
  description:
    'Node.js の開発者が パッケージ管理や安全性を改善し作成した Deno\n2022年、新しい Deno Native な Webフレームワーク Fresh がリリースされました',
  images: ['/logo.svg'],
} as const

export default function About() {
  return (
    <section
      id={'about'}
      className={'pt-16 px-8 md:pt-0 md:h-screen w-full flex flex-col md:flex-row justify-center items-center'}
    >
      <div className={'md:w-3/5 lg:w-2/5 flex md:ml-30'}>
        <div className={'w-full'}>
          <h1 className={'text-5xl md:text-8xl font-bold mb-2'}>{aboutTitle.title}</h1>
          <p className={'font-bold mb-4'}>{aboutTitle.subtitle}</p>
          <p className={'text-xl md:text-4xl font-bold whitespace-pre leading-relaxed mb-4'}>{aboutTitle.catch}</p>
          <p className={'md:text-xl font-bold whitespace-pre-wrap leading-relaxed'}>{aboutTitle.description}</p>
        </div>
      </div>
      <div className={'md:1/5 lg:w-2/5 my-12 h-full flex justify-center items-center'}>
        <div className={'w-80 md:w-56 lg:w-80'}>
          <SPFrame image={aboutTitle.images[0]} title={aboutTitle.title} />
        </div>
      </div>
    </section>
  )
}
