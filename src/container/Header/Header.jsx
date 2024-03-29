import React from 'react';

import './Header.css';
import { images } from '../../constants'
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading tittle="Chase the new flavours"/>
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>abcdefghijklmno</p>
      <button type='button' className='custom__button_explore'>Explore Menu</button>
    </div>

    <div className='app__wrapper_header_img'>
      <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;
