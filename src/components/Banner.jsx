// import '../css/style.scss';
import Nav from './Nav';

const Banner = () => {
  return (
    <div className=" flex items-end justify-end">
      <div className="backgroundImg mt-[30px]">
        <Nav />
        <div className="relative top-0 flex justify-center  pt-[200px]">
          <button className="btn-primary">立即選購</button>
          <button className="btn-outline">認識我們</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
