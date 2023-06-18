import { useState } from 'react';
import ShopItem from './ShopItem.jsx';
import { productData } from './config.js';

const Shop = () => {
  // const { shopItem } = productData;
  const [itemId, setItemId] = useState(null);

  return (
    <section>
      <div className="flex-center mx-auto px-4">
        {/* <div className="max-w-[500px]"> */}
        {itemId && <ShopItem itemId={itemId} setItemId={setItemId} />}

        {/* </div> */}
        {!itemId && (
          <>
            <h2 className="font-bold">用甜點 Sweet 你的生活！</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              tincidunt ut laoreet dolore magna aliquam erat volutpat lorem
            </p>
            <div className="grid grid-cols-1 gap-6 pt-10 md:grid-cols-3">
              {productData.map((item) => (
                <div
                  className="gift-item flex-center flex-1 gap-4 px-10 py-4 md:p-0 "
                  key={item.id}
                  onClick={() => setItemId(item.id)}
                >
                  <div className="gift-img mb-2 w-full md:h-[240px] md:w-[240px]">
                    <img
                      src={item.img}
                      className="gift-img-in h-full object-cover"
                      alt=""
                    />
                  </div>
                  <h3>{item.title}</h3>
                  <p className="max-w-[300px]">
                    {item.price === 0 ? '請洽門市' : 'NT$' + item.price}
                  </p>
                  <button className="btn-outline-red">加入購物車</button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Shop;
