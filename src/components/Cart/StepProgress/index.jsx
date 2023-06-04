import React, { memo, useContext } from 'react';
import style from './StepProgress.module.scss';
import { ReactComponent as Complete } from '../../../images/icon/pg-complete.svg';
import { useCartContext } from '../../context/CartContext';

const StepProgress = () => {
  const { step } = useCartContext();

  const steps = [
    { id: 1, stepName: '運送方式' },
    { id: 2, stepName: '寄送地址' },
    { id: 3, stepName: '付款資訊' },
  ];

  const [Step1, Step2, Step3] = [steps[0], steps[1], steps[2]];

  const statusControl = (id) => {
    let statusControl = '';
    if (step === id) {
      statusControl = 'on-step';
    } else if (step > id) {
      statusControl = 'done';
    } else if (step < id) {
      statusControl = 'disable';
    }
    return statusControl;
  };

  return (
    <>
      <div className={`${style.container}`}>
        <span
          className={`${style.progressGroup} flex flex-col items-center gap-2`}
          data-status={statusControl(Step1.id)}
        >
          <Complete
            className={style.completeIcon}
            alt=""
            data-status={statusControl(Step1.id) === 'done'}
          />
          <span
            className={style.progressIcon}
            data-status={statusControl(Step1.id)}
          >
            <span className={style.text}>{Step1.id}</span>
            <div className={style.circle} />
          </span>
          <span className={style.progressLabel}>{Step1.stepName}</span>
        </span>

        <span
          className={style.progressBar}
          data-status={statusControl(Step2.id)}
        />

        <span
          className={`${style.progressGroup} flex flex-col items-center gap-2`}
          data-status={statusControl(Step2.id)}
        >
          <Complete
            className={style.completeIcon}
            alt=""
            data-status={statusControl(Step2.id) === 'done'}
          />
          <span
            className={style.progressIcon}
            data-status={statusControl(Step2.id)}
          >
            <span className={style.text}>{Step2.id}</span>
            <div className={style.circle} />
          </span>
          <span className={style.progressLabel}>{Step2.stepName}</span>
        </span>

        <span
          className={style.progressBar}
          data-status={statusControl(Step3.id)}
        />

        <span
          className={`${style.progressGroup} flex flex-col items-center gap-2`}
          data-status={statusControl(Step3.id)}
        >
          <Complete
            className={style.completeIcon}
            alt=""
            data-status={statusControl(Step3.id) === 'done'}
          />
          <span
            className={style.progressIcon}
            data-status={statusControl(Step3.id)}
          >
            <span className={style.text}>{Step3.id}</span>
            <div className={style.circle} />
          </span>
          <span className={style.progressLabel}>{Step3.stepName}</span>
        </span>
      </div>
    </>
  );
};

export default React.memo(StepProgress);
