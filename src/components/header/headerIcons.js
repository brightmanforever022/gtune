import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { RiSettings5Fill } from 'react-icons/ri';
import { BsCart2 } from 'react-icons/bs';

const HeaderIcons = () => {
  return (
    <div className='header-icons'>
      <div className='cart-icon'>
        <BsCart2 />
        <span>1</span>
      </div>
      <div className='menu-icon'>
        <Nav.Link href="/settings">
          <RiSettings5Fill />
        </Nav.Link>
      </div>
    </div>
  )
}

export default HeaderIcons;