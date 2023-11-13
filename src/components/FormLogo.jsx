import React from 'react';
import img from '../assets/shopee-ph-347623211-removebg-preview.png';

const FormLogo = () => {
  return (
    <div className='container flex'>
      <span className='logo'>
        <img src={img} alt='Shopee Logo' />
      </span>

      <span className='text'>
        <p>
          The leading online shopping platform <br />
          in Southeast Asia and Taiwan
        </p>
      </span>
    </div>
  );
};

export default FormLogo;
