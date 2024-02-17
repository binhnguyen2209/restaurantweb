import React from 'react';

import { Header, SpecialMenu, Menu, FindUs } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <SpecialMenu />
    <Menu />
    <FindUs />
  </div>
);

export default App;
