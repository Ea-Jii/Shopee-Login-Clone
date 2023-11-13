import React from 'react';
import { useState } from 'react';
import { PiEyeClosedBold } from 'react-icons/pi';
import { BsEyeFill } from 'react-icons/bs';
import fbImg from '../assets/facebook.png';
import googleImg from '../assets/google.png';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='form__container flex'>
      <span className='form__container-top flex'>
        <h2>Log In</h2>
        <p>Login with QR</p>
      </span>

      <div className='form flex'>
        <div className='form__text-input flex'>
          <input type='text' placeholder='Phone number / Username / Email' />
        </div>

        <div className='form__password-input flex'>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
          />
          <span onClick={togglePasswordVisibility} className='icon'>
            {showPassword ? <BsEyeFill /> : <PiEyeClosedBold />}
          </span>
        </div>

        <div className='form__button flex'>
          <button className='btn' disabled>
            LOG IN
          </button>
        </div>
      </div>

      <div className='form__forgot-password flex'>
        <a href='#'>Forgot Password</a>
        <a href='#'>Log In with Phone Number</a>
      </div>

      <div className='form__divider flex'>
        <div className='divider'></div>
        <span>OR</span>
        <div className='divider'></div>
      </div>

      <div className='form__group-btn flex'>
        <a href='#'>
          <img src={fbImg} alt='' className='btn__image' />
          Facebook
        </a>

        <a href='#'>
          <img src={googleImg} alt='' className='btn__image' />
          Google
        </a>
      </div>

      <div className='form__register flex'>
        <p>
          New to Shopee?
          <span className='form__signup'>
            <a href='#'> Sign Up</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
