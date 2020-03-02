import React from 'react';
import {Button} from '@emblem-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {StyledHeaderIcon, StyledHeaderLinks} from './Header.styles';

const HeaderLinks = () => (
  <StyledHeaderLinks>
    <a href='https://github.com/tylde/emblem-ui' target='_blank' rel='noopener noreferrer'>
      <Button elementColor='dark' elementStyle='subtle' elementSize='large'>
        <StyledHeaderIcon>
          <FontAwesomeIcon icon={['fab', 'github']} />
        </StyledHeaderIcon>
      </Button>
    </a>
  </StyledHeaderLinks>
);

HeaderLinks.propTypes = {};

HeaderLinks.defaultProps = {};

export default HeaderLinks;
