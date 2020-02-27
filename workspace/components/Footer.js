import React from 'react';

const Footer = ({children}) => {
  return (
    <footer className='app-footer'>
      <div className='app-footer__content'>
        {children}
      </div>
    </footer>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
