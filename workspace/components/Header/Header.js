import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import HeaderDarkMode from './HeaderDarkMode';
import HeaderLinks from './HeaderLinks';
import NavigationHeader from '../Navigation/NavigationHeader';
import HeaderMenuButton from './HeaderMenuButton';

const Header = ({headerRef}) => (
  <header className='app-header' ref={headerRef}>
    <NavigationHeader />
    <div className='app-header__wrapper'>
      <div className='app-header__left-wrapper' />
      <div className='app-header__content-wrapper'>
        <div className='app-header__content'>
          <div className='app-header__content__left'>
            <HeaderMenuButton />
          </div>
          <div className='app-header__content__right'>
            <HeaderDarkMode />
            <HeaderLinks />
          </div>
        </div>
        <div className='app-header__logo'>
          <FontAwesomeIcon icon='shield-alt' />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
