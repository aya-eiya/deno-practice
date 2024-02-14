import SPFrame from '../static/SPFrame.tsx'
const featuresTitle = {
  title: 'FEATURES',
  subtitle: 'Freshの特徴',
  catch: 'Deno Deployで使える\nエッジでレンダリングを提供',
  description:
    'Node.js の開発者が パッケージ管理や安全性を改善し作成した Deno\n2022年、新しい Deno Native な Webフレームワーク Fresh がリリースされました',
  images: ['/logo.svg'],
} as const
export default function Features() {
  return (
    <section id={'features'} className={'w-full flex flex-col justify-center items-center'}>
      <div className={'w-full relative flex justify-center items-center mb-24'}>
        <aside className={'w-1/5 opacity-30'}>
          <SPFrame image={'/logo.svg'} title={'Features'} />
        </aside>
        <div className={'absolute w-full h-full top-0 flex flex-col justify-center items-center'}>
          <div>
            <h1 className={'text-9xl font-bold'}>{featuresTitle.title}</h1>
            <p>{featuresTitle.subtitle}</p>
          </div>
        </div>
      </div>
      <h2 className={'text-4xl font-bold w-1/2 mb-10'}>□□□□□□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□□</h2>
      <div className={'text-xl w-1/2'}>
        □□□□□□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□□ □□□□□□□ □□ □□□ □□ □□□ □□ □□□□ □□□ □□□□□ □□□ □ □□□□□□ □□ □□□□□ □□□ □□
        □□□□ □□□ □□□□□ □□□ □□□□□□□ □□ □□ □□□ □□□ □□ □□□□ □□□ □□□□□ □□□
      </div>
    </section>
  )
}
