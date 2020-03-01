import React from 'react';

import './Header.scss';

import HeaderContentContainer from './HeaderContentContainer';
import HeaderDarkMode from './HeaderDarkMode';
import HeaderLinks from './HeaderLinks';
import HeaderLogo from './HeaderLogo';
import HeaderMenuButton from './HeaderMenuButton';
import HeaderNavigation from './HeaderNavigation';

const Header = ({headerRef}) => (
  <header className='app-header' ref={headerRef}>
    <HeaderNavigation />
    <div className='app-header__wrapper'>
      <div className='app-header__left-wrapper' />
      <div className='app-header__content-wrapper'>
        <div className='app-header__content'>
          <HeaderContentContainer>
            <HeaderMenuButton />
          </HeaderContentContainer>
          <HeaderContentContainer>
            <HeaderDarkMode />
            <HeaderLinks />
          </HeaderContentContainer>
        </div>
        <HeaderLogo />
      </div>
    </div>
  </header>
);

export default Header;
