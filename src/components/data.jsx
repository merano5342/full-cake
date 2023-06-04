import gift1 from '../images/cake-3.png';
import gift2 from '../images/bag-03.jpg';
import gift3 from '../images/cake-2.jpg';

const initialState = {
  totalAmount: 0,
  step: 1,
  totalPrice: 400,
  shippingFee: 0,
  lineItems: [
    {
      id: 1,
      img: gift1,
      title: '限量優惠',
      info: 'Lorem ipsum dolor amet, consetec adipiscing elit. magna lentesque.',
      price: 180,
      quantity: 3,
    },
    {
      id: 2,
      img: gift2,
      title: '母親節禮盒',
      info: 'Lorem ipsum dolor amet, consetec adipiscing elit. magna lentesque.',
      price: 740,
      quantity: 10,
    },
    {
      id: 3,
      img: gift3,
      title: '情人節禮盒',
      info: 'Lorem ipsum dolor amet, consetec adipiscing elit. magna lentesque.',
      price: 560,
      quantity: 2,
    },
  ],
  userInfo: {
    title: '先生',
    name: 'milkmidi',
    phone: '091232345678',
    email: 'milkmidi@gmail.com',
    city: 'TPH',
    address: '',
  },
};
