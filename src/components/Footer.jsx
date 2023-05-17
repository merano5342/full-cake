import Logo from '../images/logo/zh-logo-w.svg';
import gift1 from '../images/cake-3.png';
import gift2 from '../images/bag-03.jpg';
import gift3 from '../images/cake-2.jpg';

import icon1 from '../images/logo/facebook-logo.png';
import icon2 from '../images/logo/instagram-logo.png';
import icon3 from '../images/logo/twitter-logo.png';
import icon4 from '../images/logo/pinterest-logo.png';

const Footer = () => {
  const data = {
    shopInfo: ['桃園市 台灣 Taiwan', 'service@fullcake.com', '(02) 2888 8888'],
    links: {
      title: '連結',
      item: [
        { name: '關於富客', url: './' },
        { name: '最新消息', url: './' },
        { name: '全部商品', url: './' },
        { name: '購物車', url: './' },
        { name: '聯繫我們', url: './' },
      ],
    },
    ig: {
      title: 'Instagram feed',
      item: [gift1, gift2, gift3, gift2, gift3, gift1],
    },
    email: {
      title: '訂閱電子報',
      text: 'Sign up for \nget special offer news from us',
      item: [icon1, icon2, icon3, icon4],
    },
  };
  return (
    <div id="footer" className="bg-secondary px-4 py-20">
      <div className="flex-center mx-auto flex gap-[60px] md:flex-row md:items-start md:justify-center">
        <div className="flex-center gap-2 ">
          <img src={Logo} className="max-w-[120px] pb-4" alt="" />
          {data.shopInfo.map((x) => (
            <p>{x}</p>
          ))}
        </div>
        <div className="md:pt-12">
          <h3 className="font-semi md:text-left">{data.links.title}</h3>
          <div className="flex flex-row gap-2 pt-6 md:flex-col">
            {data.links.item.map((x) => (
              <a href={x.url} className="opacity-70 hover:opacity-100">
                {x.name}
              </a>
            ))}
          </div>
        </div>
        <div className="md:pt-12">
          <h3 className="font-semi uppercase md:text-left">{data.ig.title}</h3>
          <div className="grid grid-cols-3 gap-2 pt-6">
            {data.ig.item.map((x) => (
              <img src={x} alt="" className="h-20 w-20 object-cover" />
            ))}
          </div>
        </div>
        <div className="md:pt-12">
          <h3 className="font-semi md:text-left">{data.email.title}</h3>
          <div className="items flex flex-col items-center gap-3 pt-6 md:items-start ">
            <p className="whitespace-pre  text-xs leading-5 md:text-left">
              {data.email.text}
            </p>
            <input
              type="email"
              className="w-full px-4 py-3 text-xs"
              placeholder="Your Email Address"
            />
            <div className="flex gap-3">
              {data.email.item.map((x) => (
                <img
                  src={x}
                  alt=""
                  className="w-5 cursor-pointer opacity-70 hover:opacity-100"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
