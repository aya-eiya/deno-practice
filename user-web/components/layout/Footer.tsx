const mainTitle = {
  title: 'Title Logo',
  subtitle: 'Denoの練習サイト',
  desc: 'Denoの練習サイトです',
  fullDesc: 'Denoの練習サイトです\nDenoはV8エンジンとTypeScriptを使っています\nFreshはDenoのフレームワークです',
  image: '/logo.svg',
} as const

const menuItems = {
  'Home': {
    path: '#home',
    title: 'Home',
    desc: 'ホーム',
  },
  'About': {
    path: '#about',
    title: 'About',
    desc: '私たちについて・会社概要',
  },
  'Features': {
    path: '#features',
    title: 'Features',
    desc: 'サービスの特徴',
  },
  'Projects': {
    path: '#projects',
    title: 'Projects',
    desc: '導入事例・プロジェクト',
  },
  'News': {
    path: '#news',
    title: 'News',
    desc: 'ニュース・お知らせ',
  },
  'Contact': {
    path: '#contact',
    title: 'Contact',
    desc: 'お問い合わせ・お見積もり',
  },
} as const

export default function Footer() {
  return (
    <footer>
      <div
        className={'w-full flex flex-row h-[50vh] bg-yellow-400 justify-center items-center px-24'}
      >
        <div className={'w-1/2'}>
          <h1 className={'text-4xl sm:text-8xl md:text-6xl lg:text-8xl font-bold my-3'}>{mainTitle.title}</h1>
          <p className={'text-lg sm:text-xl font-bold'}>{mainTitle.subtitle}</p>
        </div>

        <div className={'w-1/2'}>
          <div className={'text-xl font-bold my-5'}>
            {mainTitle.desc}
          </div>
          <div className={'whitespace-pre my-5'}>
            {mainTitle.fullDesc}
          </div>
        </div>
      </div>
      <div className={'my-12 px-24 flex flex-row justify-between'}>
        <div className={'flex flex-row items-baseline'}>
          <p className={'text-xl font-bold mr-12'}>{mainTitle.title}</p>
          <nav className={'flex flex-row text-sm'}>
            <div className={'menu-item px-2'}>
              <a href={menuItems.Home.path}>
                {menuItems.Home.title}
              </a>
            </div>
            <div className={'menu-item px-2'}>
              <a href={menuItems.About.path}>
                {menuItems.About.title}
              </a>
            </div>
            <div className={'menu-item px-2'}>
              <a href={menuItems.Features.path}>
                {menuItems.Features.title}
              </a>
            </div>
            <div className={'menu-item px-2'}>
              <a href={menuItems.Projects.path}>
                {menuItems.Projects.title}
              </a>
            </div>
            <div className={'menu-item px-2'}>
              <a href={menuItems.Contact.path}>
                {menuItems.Contact.title}
              </a>
            </div>
          </nav>
        </div>
        <div className={'flex flex-row items-center'}>
          <span className={'block mr-4 text-sm'}>
            © AY.LLC All Rights Reserved
          </span>
          <a href='#home' className={'block text-3xl'}>
            &uarr;
          </a>
        </div>
      </div>
    </footer>
  )
}
