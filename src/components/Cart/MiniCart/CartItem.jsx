import React, { memo } from 'react';
import style from './Cart.module.scss';
import { ReactComponent as Minus } from '../../../images/icon/minus.svg';
import { ReactComponent as Plus } from '../../../images/icon/plus.svg';
import { useCartContext } from '../../context/CartContext';
import { TrashIcon } from '@heroicons/react/24/outline';
const CartItem = (props) => {
  const { atRemoveItem, atUpdateQuantity } = useCartContext();
  const { id, img, title, price, quantity } = props;

  return (
    <div className={style.productContainer}>
      <div className="my-3 grid grid-cols-6">
        <div className="col-span-2">
          <img className={style.img} src={img} alt="" />
        </div>
        <div className="col-span-4 mx-3">
          <div className={style.info}>
            <div className={style.name}>{title}</div>
            <div className={style.price}>${price * quantity}</div>
          </div>
          <div className={style.controlContainer}>
            <div className={style.control}>
              <button
                className={style.btnMinus}
                disabled={quantity <= 1}
                onClick={() => atUpdateQuantity(id, quantity - 1)}
              >
                <Minus />
              </button>

              <span className={style.quantity}>{quantity}</span>

              <button
                className={style.btnPlus}
                onClick={() => atUpdateQuantity(id, quantity + 1)}
              >
                <Plus />
              </button>

              <button
                className="bg-transparent font-semibold hover:border-transparent rounded-full border border-primary px-2 py-2 text-primary hover:bg-primary hover:text-white"
                onClick={() => atRemoveItem(id)}
              >
                <TrashIcon class="text-gray-500 h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(CartItem);
