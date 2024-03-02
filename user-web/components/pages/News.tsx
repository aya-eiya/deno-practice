const newsTitle = {
  title: 'News',
  subtitle: 'お知らせ',
} as const

const newsList = {
  news1: {
    id: 'news_1',
    type: 'press release',
    title: 'News1',
    date: '2022-01-01',
    desc: '',
    fullDesc: '',
    figure: '/logo.svg',
    link: '',
    linkLabel: '',
  },
  news2: {
    id: 'news_2',
    type: 'press release',
    title: 'News2',
    date: '2022-01-01',
    desc: '',
    fullDesc: '',
    figure: '/logo.svg',
    link: '',
    linkLabel: '',
  },
  news3: {
    id: 'news_3',
    type: 'press release',
    title: 'News3',
    date: '2022-01-01',
    desc: '',
    fullDesc: '',
    figure: '/logo.svg',
    link: '',
    linkLabel: '',
  },
  news4: {
    id: 'news_4',
    type: 'press release',
    title: 'News4',
    date: '2022-01-01',
    desc: '',
    fullDesc: '',
    figure: '/logo.svg',
    link: '',
    linkLabel: '',
  },
  news5: {
    id: 'news_5',
    type: 'press release',
    title: 'News5',
    date: '2022-01-01',
    desc: '',
    fullDesc: '',
    figure: '/logo.svg',
    link: '',
    linkLabel: '',
  },
} as const

const orderBy = {
  date: (a: { date: string }, b: { date: string }) => a.date.localeCompare(b.date),
} as const

export default function News() {
  const orderedNews = Object.values(newsList).sort(orderBy.date)
  return (
    <section id={'news'} className={'min-h-screen w-full flex flex-col mt-24'}>
      <div className={'w-full px-12 md:px-24'}>
        <h1 className={'text-6xl font-bold mb-2'}>{newsTitle.title}</h1>
        <p className={'text-gray-500'}>{newsTitle.subtitle}</p>
      </div>

      <div className={'flex flex-col items-center content-center'}>
        {orderedNews.map((news) => (
          <div key={news.id} className={'w-8/12 mt-12 flex flex-row'}>
            <div>
              <img src={news.figure} alt={news.title} className={'w-24 h-24'} />
            </div>
            <div>
              <dl>
                <dt className={'text-xl font-bold'}>{news.title}</dt>
                <dd className={'text-gray-500'}>{news.type}</dd>
                <dd className={'text-gray-500'}>{news.date}</dd>
                <dd className={'text-gray-500'}>{news.desc}</dd>
              </dl>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
