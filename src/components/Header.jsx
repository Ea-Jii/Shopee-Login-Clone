import React from 'react';
import shopee from '../assets/Shopee-1638906723-removebg-preview.png';

const Header = () => {
  return (
    <header className='header flex'>
      <div className='header__container flex'>
        <a href=''>
          <img src={shopee} alt='' />
        </a>
        <h2>Log In</h2>
      </div>

      <div className='header__container flex'>
        <a href='#' className='need__help'>
          Need Help?
        </a>
      </div>
    </header>
  );
};

export default Header;
