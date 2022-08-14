import React from 'react';
import { RiSettings5Fill } from 'react-icons/ri';
import { BsCart2 } from 'react-icons/bs';

const HeaderIcons = () => {
  return (
    <div className='header-icons'>
      <div className='cart-icon'>
        <BsCart2 />
        <span>1</span>
      </div>
      <div className='menu-icon'><RiSettings5Fill /></div>
    </div>
  )
}

export default HeaderIcons;