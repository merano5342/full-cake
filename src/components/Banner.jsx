// import '../css/style.scss';
import Nav from './Nav';

const Banner = (props) => {
  return (
    <div className="backgroundImg relative top-0">
      {/* <Nav setPage={setPage} /> */}
      <div className="flex justify-center gap-4  pb-[200px] pt-[180px]">
        <button className="btn-primary">立即選購</button>
        <button className="btn-outline">認識我們</button>
      </div>
      {/* <div className="backgroundImg"></div> */}
    </div>
  );
};

export default Banner;
