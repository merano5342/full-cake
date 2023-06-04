import { useState, memo } from 'react';
import cakeLogo from '../images/logo/en-logo-w.svg';
import Hamburger from '../images/icon/icon-hamburger.svg';
import { useCartContext } from './context/CartContext';

const Nav = (props) => {
  const { setPage, page } = useCartContext();

  const [activeHamburger, setActiveHamburger] = useState(false);
  const itemsL = [
    { id: 'main', title: '首頁' },
    { id: 'info', title: '關於富客' },
    { id: 'news', title: '最新消息' },
  ];
  const itemsR = [
    { id: 'all-product', title: '全部商品', url: 'shop' },
    { id: 'shop-cart', title: '購物車', url: 'cart' },
    { id: 'contact', title: '聯絡我們' },
  ];
  return (
    <div className={`nav bg-${page === 'main' ? 'white' : 'secondary'}`}>
      <img src={cakeLogo} className="logoIcon" alt="" />
      <button
        className="navItemsClosed"
        onClick={() => setActiveHamburger((pre) => !pre)}
      >
        <img src={Hamburger} className="w-[20px]" alt="" />
      </button>

      <div className="navItemsOpen" data-active={activeHamburger}>
        {itemsL.map((item) => (
          <button
            key={item.id}
            className="navItem"
            onClick={() => setPage(item.url)}
          >
            <div className="item-title">{item.title}</div>
          </button>
        ))}
        <div className="w-[120px]">
          <img src={cakeLogo} className="logoIconMid" alt="" />
        </div>
        {itemsR.map((item) => (
          <button
            key={item.id}
            className="navItem"
            onClick={() => setPage(item.url)}
          >
            <div className="item-title">{item.title}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default memo(Nav);
