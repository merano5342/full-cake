import Logo from '../images/logo/zh-logo.svg';

const Intro = () => {
  return (
    <>
      <section>
        <div className="flex-center mx-auto flex gap-10 px-4 py-[100px] md:flex-row">
          <img src={Logo} className="max-w-[260px]" alt="" />
          <div className="max-w-[520px]">
            <h2 className="md:text-left ">關於富客甜品</h2>
            <p className="md:text-left ">
              「富客甜品工作室」於 2017
              年在台灣創立。以最天然的原料食材，為的就是給客人吃到最健康又最好吃的甜點蛋糕。關於富客甜品的起源，當時只是一閃而過的想法，意外的發現就是富客甜品主理人小林一直在做的事。對富客甜品主理人小林來說，甜食是一種有魔力的食物，他能夠治癒人們的不開心，更是現代人慶生祝壽的重要儀式主角。
            </p>
            <h3 className="pt-4 text-secondary md:text-left">
              我為你復刻甜品，你就是我的富客 Full Cake。
            </h3>
          </div>
        </div>
      </section>
      <div className="bg-secondary px-[60px] py-[100px]">
        <div className="flex-center mx-auto max-w-[500px]">
          <h1 className="font-thin text-white">
            訂製你的
            <br />
            故事蛋糕 Story Cake
          </h1>
          <button className="btn-outline">Check Menu</button>
        </div>
      </div>
    </>
  );
};

export default Intro;
