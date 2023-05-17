import product1 from '../images/cake-3.png';
import product2 from '../images/bag-03.jpg';
import product3 from '../images/cake-2.jpg';
import product4 from '../images/bag-big-2.jpg';

const Shopline = () => {
  const shopItems = [
    {
      id: 1,
      img: product2,
      title: '限量優惠',
      price: '$1,600',
      info: 'Lorem ipsum dolor amet, consetec adipiscing elit. magna lentesque.',
    },
    {
      id: 2,
      img: product1,
      title: '母親節禮盒',
      price: '$1,600',
      info: 'Lorem ipsum dolor amet, consetec adipiscing elit. magna lentesque.',
    },
    {
      id: 3,
      img: product3,
      title: '情人節禮盒',
      price: '$1,600',
      info: 'Lorem ipsum dolor amet, consetec adipiscing elit. magna lentesque.',
    },
    {
      id: 3,
      img: product4,
      title: '情人節禮盒',
      price: '$1,600',
      info: 'Lorem ipsum dolor amet, consetec adipiscing elit. magna lentesque.',
    },
    {
      id: 4,
      img: product3,
      title: '情人節禮盒',
      price: '$1,600',
      info: 'Lorem ipsum dolor amet, consetec adipiscing elit. magna lentesque.',
    },
    {
      id: 5,
      img: product1,
      title: '情人節禮盒',
      price: '$1,600',
      info: 'Lorem ipsum dolor amet, consetec adipiscing elit. magna lentesque.',
    },
  ];
  return (
    <div className="mx-3 px-4">
      <div className="mx-auto border-t border-mediumBrown  py-10">
        <section className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-[500px] ">
            <h2 className="text-left">全部商品</h2>
            <p className="text-left">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              tincidunt ut laoreet dolore magna aliquam erat volutpat lorem
            </p>
          </div>
          <button className="btn-primary">查看更多</button>
        </section>

        <div className="product-box flex w-auto justify-center gap-3 pt-12">
          {shopItems.map((item) => (
            <div className="gift-item flex-center flex-1 gap-4" key={item.id}>
              <div className="gift-img mb-2 h-[300px] min-w-[200px] ">
                <img
                  src={item.img}
                  className="gift-img-in h-full object-cover"
                  alt=""
                />
              </div>

              <p className="text-primary">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shopline;
