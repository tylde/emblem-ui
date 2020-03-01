import React from 'react';
import {Button} from '@emblem-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const HeaderLinks = () => (
  <div className='app-header__content__links'>
    <a href='https://github.com/tylde/emblem-ui' target='_blank' rel='noopener noreferrer'>
      <Button elementColor='dark' elementStyle='subtle' elementSize='large'>
        <div className='app-header__icon'>
          <FontAwesomeIcon icon={['fab', 'github']} />
        </div>
      </Button>
    </a>
  </div>
);

HeaderLinks.propTypes = {};

HeaderLinks.defaultProps = {};

export default HeaderLinks;
