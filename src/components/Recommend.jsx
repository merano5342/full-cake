import icon from '../images/icon/icon-pic.png';
import chara1 from '../images/character/g1.png';
import chara2 from '../images/character/g2.png';
import chara3 from '../images/character/g3.png';
import chara4 from '../images/character/g4.png';
import chara5 from '../images/character/g5.png';

const Recommend = () => {
  const gift = [
    {
      id: 1,
      img: chara1,
      name: 'Josefin Lora',
      from: 'Germany',
      info: 'Negative feedback is better none. I would rather have a man hate me than overlook me.',
    },
    {
      id: 2,
      img: chara2,
      name: 'Rafayel Nola',
      from: 'California',
      info: 'Negative feedback is better none. I would rather have a man hate me than overlook me.',
    },
    {
      id: 3,
      img: chara3,
      name: 'Jeniffar Hinch',
      from: 'New Yeork',
      info: 'Negative feedback is better none. I would rather have a man hate me than overlook me.',
    },
    {
      id: 4,
      img: chara4,
      name: 'Josefin Lora',
      from: 'Germany',
      info: 'Negative feedback is better none. I would rather have a man hate me than overlook me.',
    },
    {
      id: 5,
      img: chara5,
      name: 'Rafayel Nola',
      from: 'California',
      info: 'Negative feedback is better none. I would rather have a man hate me than overlook me.',
    },
    {
      id: 6,
      img: chara1,
      name: 'Jeniffar Hinch',
      from: 'New Yeork',
      info: 'Negative feedback is better none. I would rather have a man hate me than overlook me.',
    },
  ];
  return (
    <section>
      <div className="flex-center mx-auto px-4 py-10">
        <h2>網紅推薦</h2>
        <div className="grid grid-cols-1 gap-20  pt-12  md:grid-cols-3">
          {gift.map((item) => (
            <div
              className="gift-item flex-center  gap-4 px-10 py-4 md:p-0 "
              key={item.id}
            >
              <div className="gift-img mb-2 md:h-[240px] md:w-[240px]">
                <img
                  src={item.img}
                  className="gift-img-in h-full object-cover"
                  alt=""
                />
              </div>
              <img src={icon} className="w-14 opacity-30" alt="" />

              <p className="max-w-[300px]">{item.info}</p>
              <p>
                <span className="font-semi text-dark">{item.name} / </span>
                <span className="text-gray">{item.from}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommend;
