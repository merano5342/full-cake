import gift1 from '../images/cake-3.png';
import gift2 from '../images/bag-03.jpg';
import gift3 from '../images/cake-2.jpg';
import gift4 from '../images/tin-box.png';
import gift5 from '../images/bag-04.jpg';
import gift6 from '../images/bag-big-1.jpg';

export const initialState = {
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
      quantity: 1,
    },
    {
      id: 3,
      img: gift3,
      title: '情人節禮盒',
      info: 'Lorem ipsum dolor amet, consetec adipiscing elit. magna lentesque.',
      price: 560,
      quantity: 2,
    },
    {
      id: 4,
      img: gift4,
      title: '情人節禮盒',
      info: 'Lorem ipsum dolor amet, consetec adipiscing elit. magna lentesque.',
      price: 560,
      quantity: 2,
    },
    {
      id: 5,
      img: gift5,
      title: '情人節禮盒',
      info: 'Lorem ipsum dolor amet, consetec adipiscing elit. magna lentesque.',
      price: 560,
      quantity: 2,
    },
    {
      id: 6,
      img: gift6,
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
