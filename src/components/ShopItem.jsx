import { productData } from './config.js';
import style from '../components/Cart/MiniCart/Cart.module.scss';
import { ReactComponent as Minus } from '../images/icon/minus.svg';
import { ReactComponent as Plus } from '../images/icon/plus.svg';
import { useCartContext } from './context/CartContext';

const ShopItem = (props) => {
  const { itemId, setItemId } = props;
  const { atRemoveItem, atUpdateQuantity, cartItems } = useCartContext();

  const item = cartItems.find((x) => x.id === itemId);
  const { id, img, title, price, quantity, info } = item;
  return (
    <section className="flex flex-col  px-4">
      <button
        className="btn-outline-red mb-10 self-end mr-2"
        onClick={() => setItemId(null)}
      >
        回上一頁
      </button>
      <div
        className="flex w-full flex-col items-center gap-6  md:flex-row"
        key={item.id}
      >
        <div className="gift-img mb-2 max-h-[400px] max-w-[400px]">
          <img
            src={item.img}
            className="gift-img-in h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="">
          <h3 className="text-left text-3xl text-black">{item.title}</h3>
          <p className="mt-2 max-w-[300px] text-left text-lg ">
            {item.price === 0 ? '請洽門市' : 'NT$' + item.price}
          </p>
          <div className="my-4 flex items-center gap-8">
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
            <button className="btn-outline-red">加入購物車</button>
          </div>
          <div className="whitespace-pre-wrap leading-10">{item.info}</div>
        </div>
      </div>
    </section>
  );
};

export default ShopItem;
