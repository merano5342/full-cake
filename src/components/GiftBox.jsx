import gift1 from '../images/cake-3.png';
import gift2 from '../images/bag-03.jpg';
import gift3 from '../images/cake-2.jpg';

const GiftBox = () => {
  const gift = [
    {
      id: 1,
      img: gift1,
      title: '限量優惠',
      info: 'Lorem ipsum dolor amet, consetec adipiscing elit. magna lentesque.',
    },
    {
      id: 2,
      img: gift2,
      title: '母親節禮盒',
      info: 'Lorem ipsum dolor amet, consetec adipiscing elit. magna lentesque.',
    },
    {
      id: 3,
      img: gift3,
      title: '情人節禮盒',
      info: 'Lorem ipsum dolor amet, consetec adipiscing elit. magna lentesque.',
    },
  ];
  return (
    <section>
      <div className="flex-center mx-auto px-4 py-10">
        <div className="max-w-[500px]">
          <h2 className="font-bold">用甜點 Sweet 你的生活！</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
            tincidunt ut laoreet dolore magna aliquam erat volutpat lorem
          </p>
        </div>
        <div className="flex flex-col gap-6 pt-12 md:flex-row">
          {gift.map((item) => (
            <div
              className="gift-item flex-center flex-1 gap-4 px-10 py-4 md:p-0 "
              key={item.id}
            >
              <div className="gift-img w-full mb-2 md:h-[240px] md:w-[240px]">
                <img
                  src={item.img}
                  className="gift-img-in h-full object-cover"
                  alt=""
                />
              </div>
              <h3>{item.title}</h3>
              <p className="max-w-[300px]">{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftBox;
