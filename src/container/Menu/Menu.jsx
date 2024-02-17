import React from 'react';
import { data, images } from '../../constants'
import './Menu.css';
import { MenuItem } from '../../components';

const Menu = () => (
  <div className="app__menu flex__center" id="menu">
    <div className="app__menu1">
      <div className="app__wrapper_menuInfo">
        <h1 className="app__tittleMenu">Tittle Menu 1</h1>
        {data.wines.map((wine, index) => (
          <div className="item">
            <div class="title">{index + 1}. {wine.title}</div>
            <div class="price">{wine.price}</div>
            <div class="tag">{wine.tags}</div>
          </div>
        ))}
      </div>
      <div className="app__wrapper_menuImg">
        <img src={images.menu} alt="menu img" />
      </div>
    </div>
    <hr style={{ color: 'yellow' }}/>
    <div className="app__menu1">
      <div className="app__wrapper_menuInfo">
        <h1 className="app__tittleMenu">Tittle Menu 2</h1>
        {data.cocktails.map((wine, index) => (
          <div className="item">
            <div class="title">{index + 1}. {wine.title}</div>
            <div class="price">{wine.price}</div>
            <div class="tag">{wine.tags}</div>
          </div>
        ))}
      </div>
      <div className="app__wrapper_menuImg">
        <img src={images.menu} alt="menu img" />
      </div>
    </div>
  </div>
);

export default Menu;
