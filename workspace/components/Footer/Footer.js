import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {StyledFooter, StyledFooterAuthor, StyledFooterContent} from './Footer.styles';

const Footer = ({footerRef}) => (
  <StyledFooter ref={footerRef}>
    <StyledFooterContent>
      <StyledFooterAuthor>
        <span>Made with </span>
        <div>
          <FontAwesomeIcon icon='coffee' />
        </div>
        <span>by Mateusz Kalinowski</span>
      </StyledFooterAuthor>
    </StyledFooterContent>
  </StyledFooter>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
