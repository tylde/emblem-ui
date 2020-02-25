import React from 'react';
import Link from 'next/link';

const Navigation = (props) => {
  return (
    <nav className='app-navigation'>
      <div className='app-navigation-element'><Link href='/'><a>Home</a></Link></div>
      <div className='app-navigation-element'><Link href='/buttons'><a>Buttons</a></Link></div>
      <div className='app-navigation-element'><Link href='/checkbox'><a>Checkbox</a></Link></div>
      <div className='app-navigation-element'><Link href='/form'><a>Form</a></Link></div>
      <div className='app-navigation-element'><Link href='/input'><a>Input</a></Link></div>
      <div className='app-navigation-element'><Link href='/switch'><a>Switch</a></Link></div>
    </nav>
  );
};

export default Navigation;
