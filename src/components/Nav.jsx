import React, { memo, useState } from 'react';
// import '../css/style.scss';

import cakeLogo from '../images/logo/en-logo-w.svg';
import Hamburger from '../images/icon/icon-hamburger.svg';

const Nav = () => {
  const [activeHamburger, setActiveHamburger] = useState(false);
  const itemsL = [
    { id: 'main', title: '首頁' },
    { id: 'info', title: '關於富客' },
    { id: 'news', title: '最新消息' },
  ];
  const itemsR = [
    { id: 'all-product', title: '全部商品' },
    { id: 'shop-cart', title: '購物車' },
    { id: 'contact', title: '聯絡我們' },
  ];
  return (
    <div className="nav">
      <img src={cakeLogo} className="logoIcon" alt="" />
      <button
        className="navItemsClosed"
        onClick={() => setActiveHamburger((pre) => !pre)}
      >
        <img src={Hamburger} className="w-[20px]" alt="" />
      </button>

      <div className="navItemsOpen" data-active={activeHamburger}>
        {itemsL.map((item) => (
          <div key={item.id} className="navItem">
            <a href="">{item.title}</a>
          </div>
        ))}
        <div className="w-[180px]">
          <img src={cakeLogo} className="logoIconMid" alt="" />
        </div>
        {itemsR.map((item) => (
          <div key={item.id} className="navItem">
            <a href="">{item.title}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Nav);
