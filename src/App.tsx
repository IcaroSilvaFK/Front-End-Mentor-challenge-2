import { useState } from 'react';
import { Header } from './components/Header';
import MenuMobile from './components/mobile/Menu';
import { SectionLeft } from './components/SectionLeft';

import { Main } from './styles/app.styles';

export function App() {
  const [menuMobileIsVisible, setMenuMobileIsVisible] = useState(false);

  function handleOpenMenuMobile() {
    setMenuMobileIsVisible(true);
  }
  function handleCloseMenuMobile() {
    setMenuMobileIsVisible(false);
  }

  return (
    <>
      <Header onPressMenuBurguer={handleOpenMenuMobile} />
      <Main>
        <SectionLeft />
        <section>
          <img
            src='/assets/image-hero-desktop.png'
            alt='image-hero'
            className='desktop__image'
          />
          <img
            src='/assets/image-hero-mobile.png'
            alt='image-hero'
            className='mobile__image'
          />
        </section>
      </Main>
      {menuMobileIsVisible && (
        <MenuMobile handleCloseMenu={handleCloseMenuMobile} />
      )}
    </>
  );
}
