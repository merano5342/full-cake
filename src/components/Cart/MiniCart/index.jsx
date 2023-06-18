import React, { memo } from 'react';
import style from './Cart.module.scss';
import cx from 'classnames';

import { useCartContext } from '../../context/CartContext';
import CartItem from './CartItem';

const Cart = (props) => {
  const { state, cartItems } = useCartContext();
  const cart = state;
  const shippingOpt = state.shipping;
  return (
    <div className=" mx-4 w-full min-w-[400px]">
      <h2 className="cart-title mb-3 text-left">購物籃</h2>
      <div className={`${style.cart}`}>
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
              />
            );
          })
        ) : (
          <div className="flex items-center justify-center py-10 text-lightGray">
            購物車是空的
          </div>
        )}
        <div className={style.cartInfo}>
          <div className="text-secondary">運費</div>
          {shippingOpt && <div className=""> {shippingOpt.name}</div>}
          <div className={style.price}>
            {shippingOpt.price === 0 ? '免費' : `$ ${shippingOpt.price}`}
          </div>
        </div>
        <div className={style.cartInfo}>
          <div className="text-secondary">小計</div>
          <div className={style.price}>${cart.totalAmount}</div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Cart);
