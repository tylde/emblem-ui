import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './Footer.scss';

const Footer = ({footerRef}) => (
  <footer className='app-footer' ref={footerRef}>
    <div className='app-footer__content'>
      <div className='app-footer__author'>
        <span>Made with </span>
        <div className='app-footer__coffee'>
          <FontAwesomeIcon icon='coffee' />
        </div>
        <span>by Mateusz Kalinowski</span>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
