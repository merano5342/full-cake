// import '../css/style.scss';
import Nav from './Nav';

const App = () => {
  return (
    <>
      <Nav />
      <div className="flex items-end justify-center pt-[160px]">
        <button className="btn-primary">立即選購</button>
        <button className="btn-outline">認識我們</button>
      </div>
      <div className="backgroundImg mt-[30px]"></div>
    </>
  );
};

export default App;
