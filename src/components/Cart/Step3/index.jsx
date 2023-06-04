import React, { memo } from 'react';
// phase = "credit-card"

const inputData = [
  {
    id: 'card-holder',
    item: '持卡人姓名',
    type: 'text',
    placeholder: 'John Doe',
    col: 'col-span-1',
  },
  {
    id: 'card-number',
    item: '卡號',
    type: 'text',
    placeholder: '1111 2222 3333 4444',
    col: 'col-span-2',
  },
  {
    id: 'card-exp-date',
    item: '有效期限',
    type: 'text',
    placeholder: 'MM/YY',
    col: 'col-span-2',
  },
  {
    id: 'card-cvc',
    item: 'CVC / CCV',
    type: 'text',
    placeholder: '123',
    col: 'col-span-1',
  },
];

const input = (item) => {
  return (
    <div className={item.col} key={item.id}>
      <div className="item-group mb-4">
        <label>{item.item}</label>
        <div className="input-group">
          <input
            type={item.type}
            className="form-control p-3"
            id={item.id}
            placeholder={item.placeholder}
          />
        </div>
      </div>
    </div>
  );
};
const Step3 = () => {
  return (
    <section className="form-body" data-phase="credit-card">
      <h3 className="form-title mb-3">付款資訊</h3>
      <div className=" grid grid-cols-3 gap-4">
        {input(inputData[0])}
        {input(inputData[1])}
        {input(inputData[2])}
        {input(inputData[3])}
      </div>
    </section>
  );
};

export default React.memo(Step3);
