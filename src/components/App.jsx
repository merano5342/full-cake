import Banner from './Banner';
import GiftBox from './GiftBox';
import Shopline from './Shopline';
import Intro from './Intro';
import Recommend from './Recommend';
import Footer from './Footer';
import Shop from './Shop';
import Cart from './Cart';
import Nav from './Nav';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { CartContext } from './context/CartContext';

import { productData, shippingRadioData } from './config';

import useShoppingCart from '../hooks/useShoppingCart';
import {
  actionUpdateQuantity,
  actionRemoveItem,
  actionApplyShipping,
} from '../hooks/actions';

const App = () => {
  const [page, setPage] = useState('main');
  const [step, setStep] = useState(1);

  const [state, dispatch] = useShoppingCart();
  const { cartItems } = state;

  const atUpdateQuantity = useCallback(
    (id, quantity) => {
      dispatch(actionUpdateQuantity(id, quantity));
    },
    [dispatch],
  );

  const atRemoveItem = useCallback(
    (id) => {
      dispatch(actionRemoveItem(id));
    },
    [dispatch],
  );
  const atApplyShipping = useCallback(
    (shipping) => {
      dispatch(actionApplyShipping(shipping));
    },
    [dispatch],
  );

  const providerValue = useMemo(() => {
    return {
      productData,
      cartItems,
      page,
      setPage,
      step,
      setStep,
      atUpdateQuantity,
      atRemoveItem,
      atApplyShipping,
      state,
    };
  }, [step, dispatch, state]);
  return (
    <CartContext.Provider value={providerValue}>
      <div className="relative" id="app">
        <div className="fixed top-0 z-10 w-full">
          <Nav />
        </div>
        <div className="wrapper relative top-[100px]">
          {page === 'main' && (
            <>
              <Banner setPage={setPage} />

              <GiftBox />
              <Shopline />
              <Intro />
              <Recommend />
              <Footer />
            </>
          )}
          {page === 'cart' && <Cart />}
          {page === 'shop' && <Shop />}
        </div>
      </div>
    </CartContext.Provider>
  );
};

export default App;
