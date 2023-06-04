import { useCartContext } from '../../context/CartContext';
import React, { memo } from 'react';
// phase = "shipping"
import { shippingRadioData } from '../../config';
import style from './Step1.module.scss';

const Step1 = () => {
  const { atApplyShipping } = useCartContext();
  const radioDataMap = shippingRadioData.map((shipping) => {
    return (
      <div className={`${style.group} mb-3 w-full`} key={shipping.id}>
        <div className={style.groupRight}>
          <input
            id={shipping.id}
            type="radio"
            name="shipping"
            onClick={() => atApplyShipping(shipping)}
          />
          {/* <label /> */}
          <div className="">
            <div className={style.info}>
              <div className={style.text}>{shipping.name}</div>
              <div className={`${style.period} `}>{shipping.period}</div>
            </div>
          </div>
        </div>
        <div className={style.price}>
          {shipping.price === 0 ? '免費' : `$${shipping.price}`}
        </div>
      </div>
    );
  });

  return (
    <section className={`${style.form}`} data-phase="shipping">
      <h3 className="form-title mb-3">運送方式</h3>
      {radioDataMap}
    </section>
  );
};

export default React.memo(Step1);
