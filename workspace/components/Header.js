import React from 'react';
import {Button} from '@emblem-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import HeaderDarkMode from './HeaderDarkMode';

const Header = () => (
  <header className='app-header'>
    <div className='app-header__wrapper'>
      <div className='app-header__left-wrapper'>

      </div>
      <div className='app-header__content-wrapper'>
        <div className='app-header__content'>
          <div>
            <div className='app-header__menu'>
              <FontAwesomeIcon icon='bars'  />
            </div>
          </div>
          <div className='app-header__content__right'>
            <HeaderDarkMode />
            <div className='app-header__content__links'>
              <a href='https://github.com/tylde/emblem-ui' target='_blank' rel='noopener noreferrer'>
                <Button color='secondary' outline>
                  <div style={{width: 18, height: 18}}>
                    <FontAwesomeIcon icon={['fab', 'github']}  />
                  </div>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className='app-header__logo'>
          <FontAwesomeIcon icon='shield-alt'  />
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
