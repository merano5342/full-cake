import React, { memo } from 'react';
import style from './ProgressControl.module.scss';
import { ReactComponent as LeftArrow } from '../../../images/icon/left-arrow.svg';
import { ReactComponent as ReftArrow } from '../../../images/icon/right-arrow.svg';
import { useCartContext } from '../../context/CartContext';

const ProgressControl = () => {
  // const { setStep, step } = props;
  const { setStep, step } = useCartContext();
  return (
    <section className={`${style.control} `}>
      <div className="flex justify-between">
        <button
          className={`${style.preBtn} btn px-5 py-2 data-[active=false]:hidden`}
          type="button"
          data-active={!(step === 1)}
          disabled={step === 1}
          onClick={() => setStep(step - 1)}
        >
          <LeftArrow className={style.leftArrow} alt="" />
          上一步
        </button>
        <button
          className={`${style.nextBtn} btn btn-primary px-5 py-2`}
          type="button"
          data-active=""
          disabled={!(step < 3)}
          onClick={() => setStep(step + 1)}
        >
          {step < 3 ? '下一步' : '確認下單'}
          <ReftArrow className={style.rightArrow} alt="" />
        </button>
      </div>
    </section>
  );
};

export default React.memo(ProgressControl);
