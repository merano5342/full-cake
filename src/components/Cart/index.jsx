import React, { useCallback, useMemo, useState } from 'react';

import StepProgress from './StepProgress';
import MiniCart from './MiniCart';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ProgressControl from './ProgressControl';
import { useCartContext } from '../context/CartContext';

import '../../css/reset.scss';
import '../../css/main.scss';
import '../../css/base.scss';

const STEP_MAP = [Step1, Step2, Step3];

const Cart = () => {
  const { step } = useCartContext();
  const StepControl = STEP_MAP[step - 1];

  return (
    <main className="site-main" id="cart">
      <div className="main-container flex w-full flex-col gap-16 px-10 md:flex-row">
        <section className="cart-container flex-2">
          <MiniCart />
        </section>
        <section className="register-container flex-3 w-full">
          <h2 className=" text-left">結帳</h2>

          <StepProgress />
          <StepControl />
          <ProgressControl />
        </section>
      </div>
    </main>
  );
};

export default Cart;
