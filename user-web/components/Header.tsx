import DrawerMenu from '../islands/menu/DrawerMenu.tsx'

export default function Header() {
  const mainTitle = {
    title: 'Title Logo',
    subtitle: 'Denoの練習サイト',
    desc: 'Denoの練習サイトです\nDenoはV8エンジンとTypeScriptを使っています。',
    image: '/logo.svg',
  }
  const contactUs = {
    buttonTitle: 'Contact Us',
  }
  const menuItems = {
    'Home': {
      path: '/',
      title: 'Home',
      desc: 'ホーム',
    },
    'About': {
      path: '/about',
      title: 'About',
      desc: '私たちについて・会社概要',
    },
    'News': {
      path: '/news',
      title: 'News',
      desc: 'ニュース・お知らせ',
    },
    'Projects': {
      path: '/projects',
      title: 'Projects',
      desc: '導入事例・プロジェクト',
    },
    'Contact': {
      path: '/contact',
      title: 'Contact',
      desc: 'お問い合わせ・お見積もり',
    },
  }
  return (
    <header className={'sticky w-full h-32 flex flex-row justify-between items-end px-12'}>
      <div className={'header-logo w-1/2 flex items-center pl-8 py-6'}>
        <p className={'flex px-2 text-lg'}>Title Logo</p>
      </div>
      <nav className={'w-5/6 flex content-center justify-end mr-10'}>
        <div className={'header-menu w-1/2 flex flex-row justify-between items-center py-6'}>
          <div className={'menu-item px-2'}>{menuItems.Home.title}</div>
          <div className={'menu-item px-2'}>{menuItems.About.title}</div>
          <div className={'menu-item px-2'}>{menuItems.News.title}</div>
          <div className={'menu-item px-2'}>{menuItems.Projects.title}</div>
          <div className={'menu-item px-2'}>{menuItems.Contact.title}</div>
        </div>
      </nav>
      <nav>
        <div className={'header-drawer-menu'}>
          <DrawerMenu>
            <div className={'bg-gray-100 w-screen h-screen flex flex-row justify-center items-center'}>
              <div className={'w-1/5 flex flex-col'}>
                <div className={'menu-item pb-5'}>
                  <p className={'text-6xl font-bold'}>{menuItems.Home.title}</p>
                  <p className={'text-gray-500'}>{menuItems.Home.desc}</p>
                </div>
                <div className={'menu-item pb-5'}>
                  <p className={'text-6xl font-bold'}>{menuItems.About.title}</p>
                  <p className={'text-gray-500'}>{menuItems.About.desc}</p>
                </div>
                <div className={'menu-item pb-5'}>
                  <p className={'text-6xl font-bold'}>{menuItems.News.title}</p>
                  <p className={'text-gray-500'}>{menuItems.News.desc}</p>
                </div>
                <div className={'menu-item pb-5'}>
                  <p className={'text-6xl font-bold'}>{menuItems.Projects.title}</p>
                  <p className={'text-gray-500'}>{menuItems.Projects.desc}</p>
                </div>
                <div className={'menu-item pb-5'}>
                  <p className={'text-6xl font-bold'}>{menuItems.Contact.title}</p>
                  <p className={'text-gray-500'}>{menuItems.Contact.desc}</p>
                </div>
              </div>
              <div className={'w-2/5 flex flex-col items-center'}>
                <p className={'text-8xl font-bold mb-3'}>{mainTitle.title}</p>
                <p className={'mb-3'}>{mainTitle.subtitle}</p>
                <div className={'flex w-full flex-row justify-center items-center'}>
                  <p className={'whitespace-pre text-sm mr-5'}>{mainTitle.desc}</p>
                  <button className={'rounded-full bg-yellow-400 px-6 py-4'}>{contactUs.buttonTitle}</button>
                </div>
              </div>
            </div>
          </DrawerMenu>
        </div>
      </nav>
    </header>
  )
}
