const newsTitle = {
  title: 'News',
  subtitle: 'お知らせ',
} as const

export default function News() {
  return (
    <section id={'news'} className={'min-h-screen w-full flex flex-col mt-12'}>
      <div className={'w-full px-12 md:px-24'}>
        <h1 className={'text-6xl font-bold mb-2'}>{newsTitle.title}</h1>
        <p className={'text-gray-500'}>{newsTitle.subtitle}</p>
      </div>

      <div>
      </div>
    </section>
  )
}
