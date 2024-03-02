import { useSignal } from '@preact/signals'
import DrawerMenu from '../../islands/menu/DrawerMenu.tsx'
import Feedback from '../../islands/scrollY/Feedback.tsx'
import MainTitle from '../../islands/menu/MainTitle.tsx'
import NaviBar from '../../islands/menu/NaviBar.tsx'

const mainTitle = {
  title: 'Title Logo',
  subtitle: 'Denoの練習サイト',
  desc: 'Denoの練習サイトです\nDenoはV8エンジンとTypeScriptを使っています。',
  image: '/logo.svg',
} as const

const contactUs = {
  buttonTitle: 'Contact Us',
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

export default function Header() {
  const scrollY = useSignal<number | undefined>(undefined)
  return (
    <header
      className={'fixed top-0 w-full bg-white md:bg-transparent h-20 md:h-32 flex flex-row justify-between items-center px-2 z-10'}
    >
      <Feedback scrollY={scrollY} />
      <div
        className={'header-logo w-1/2 flex items-center pl-2 md:pl-8 md:py-6'}
      >
        <MainTitle title={mainTitle.title} scrollY={scrollY} />
      </div>
      <div className={'w-1/2 flex justify-end md:pr-4'}>
        <nav className={'flex'}>
          <NaviBar scrollY={scrollY}>
            <div className={'menu-item px-2 hidden md:block'}>
              <a href={menuItems.Home.path}>
                {menuItems.Home.title}
              </a>
            </div>
            <div className={'menu-item px-2 hidden md:block'}>
              <a href={menuItems.About.path}>
                {menuItems.About.title}
              </a>
            </div>
            <div className={'menu-item px-2 hidden md:block'}>
              <a href={menuItems.Features.path}>
                {menuItems.Features.title}
              </a>
            </div>
            <div className={'menu-item px-2 hidden md:block'}>
              <a href={menuItems.Projects.path}>
                {menuItems.Projects.title}
              </a>
            </div>
            <div className={'menu-item px-2 block'}>
              <a href={menuItems.Contact.path}>
                {menuItems.Contact.title}
              </a>
            </div>
          </NaviBar>
        </nav>
        <nav>
          <div className={'header-drawer-menu'}>
            <DrawerMenu>
              <div
                className={'bg-gray-100 w-screen h-screen flex flex-col md:flex-row justify-center items-center'}
              >
                <div className={'w-4/5 md:w-1/5 flex flex-col'}>
                  <div className={'menu-item pb-5 animate-[drawer-effect_1s_ease-out]'}>
                    <a href={menuItems.Home.path}>
                      <p className={'text-4xl lg:text-6xl font-bold'}>
                        {menuItems.Home.title}
                      </p>
                      <p className={'text-sm text-gray-400'}>
                        {menuItems.Home.desc}
                      </p>
                    </a>
                  </div>
                  <div className={'menu-item pb-5 animate-[drawer-effect_.9s_ease-out]'}>
                    <a href={menuItems.About.path}>
                      <p className={'text-4xl lg:text-6xl font-bold'}>
                        {menuItems.About.title}
                      </p>
                      <p className={'text-sm text-gray-400'}>
                        {menuItems.About.desc}
                      </p>
                    </a>
                  </div>
                  <div className={'menu-item pb-5 animate-[drawer-effect_.7s_ease-out]'}>
                    <a href={menuItems.Features.path}>
                      <p className={'text-4xl lg:text-6xl font-bold'}>
                        {menuItems.Features.title}
                      </p>
                      <p className={'text-sm text-gray-400'}>
                        {menuItems.Features.desc}
                      </p>
                    </a>
                  </div>
                  <div className={'menu-item pb-5 animate-[drawer-effect_.7s_ease-out]'}>
                    <a href={menuItems.Projects.path}>
                      <p className={'text-4xl lg:text-6xl font-bold'}>
                        {menuItems.Projects.title}
                      </p>
                      <p className={'text-sm text-gray-400'}>
                        {menuItems.Projects.desc}
                      </p>
                    </a>
                  </div>
                  <div className={'menu-item pb-5 animate-[drawer-effect_.8s_ease-out]'}>
                    <a href={menuItems.News.path}>
                      <p className={'text-4xl lg:text-6xl font-bold'}>
                        {menuItems.News.title}
                      </p>
                      <p className={'text-sm text-gray-400'}>
                        {menuItems.News.desc}
                      </p>
                    </a>
                  </div>
                  <div className={'menu-item pb-5 animate-[drawer-effect_.6s_ease-out]'}>
                    <a href={menuItems.Contact.path}>
                      <p className={'text-4xl lg:text-6xl font-bold'}>
                        {menuItems.Contact.title}
                      </p>
                      <p className={'text-sm text-gray-400'}>
                        {menuItems.Contact.desc}
                      </p>
                    </a>
                  </div>
                </div>
                <div
                  className={'w-full py-12 md:w-3/5 lg:w-2/5 flex flex-col items-center bg-yellow-400 md:bg-inherit animate-drawer-effect'}
                >
                  <p className={'text-6xl lg:text-8xl font-bold mb-3'}>
                    {mainTitle.title}
                  </p>
                  <p className={'mb-3'}>{mainTitle.subtitle}</p>
                  <div
                    className={'flex w-full flex-col md:flex-row justify-center items-center'}
                  >
                    <p className={'whitespace-pre text-sm md:mr-5 py-4'}>
                      {mainTitle.desc}
                    </p>
                    <button
                      className={'rounded-full bg-white md:bg-yellow-400 px-6 py-4'}
                    >
                      {contactUs.buttonTitle}
                    </button>
                  </div>
                </div>
              </div>
            </DrawerMenu>
          </div>
        </nav>
      </div>
    </header>
  )
}
