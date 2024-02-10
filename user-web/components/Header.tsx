import DrawerMenu from '../islands/menu/DrawerMenu.tsx'

export default function Header() {
  const menuItems = {
    'Home': {
      path: '/',
      title: 'Home',
    },
    'About': {
      path: '/about',
      title: 'About',
    },
    'News': {
      path: '/news',
      title: 'News',
    },
    'Projects': {
      path: '/projects',
      title: 'Projects',
    },
    'Contact': {
      path: '/contact',
      title: 'Contact',
    },
  }
  return (
    <header className={'sticky w-full h-24 flex flex-row justify-between'}>
      <div className={'header-logo w-1/2 flex items-center pl-8'}>
        <p className={'flex px-2 text-lg'}>Title Logo</p>
      </div>
      <nav className={'w-5/6 flex content-center justify-center'}>
        <div className={'header-menu w-1/2 flex flex-row justify-between items-center'}>
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
            <div className={'bg-white w-screen'}>
              <div className={'menu-item'}>{menuItems.Home.title}</div>
              <div className={'menu-item'}>{menuItems.About.title}</div>
              <div className={'menu-item'}>{menuItems.News.title}</div>
              <div className={'menu-item'}>{menuItems.Projects.title}</div>
              <div className={'menu-item'}>{menuItems.Contact.title}</div>
            </div>
          </DrawerMenu>
        </div>
      </nav>
    </header>
  )
}
