import IconMercury from "/src/components/icons/mercury.svg";
import IconMars from "/src/components/icons/mars.svg";
import IconVenus from "/src/components/icons/venus.svg";
import IconEarth from "/src/components/icons/earth.svg";
import IconUranos from "/src/components/icons/uranos.svg";
import IconNeptune from "/src/components/icons/neptune.svg";
import IconSaturn from "/src/components/icons/saturn.svg";
import IconJupiter from "/src/components/icons/jupiter.svg";
import Arrow from "/src/components/icon-chevron.svg";

export default function HomeMobile() {
  return (
    <div className="bg-[url('./src/components/background-stars.svg')] bg-no-repeat bg-centerflex flex-col ">
      <div className="header-nav fixed hamburger-menu w-screen flex py-4 px-4 bg-primary-white z-50 border-b border-whiteOp bg-darkblue">
        <div>
          <h1 className="text-white text-[28px] font-normal font-antonio uppercase">
            THE PLANETS
          </h1>
        </div>

        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li className="flex items-center justify-between pb-5 pt-5 border-b-[0.5px] border-whiteOp">
            <div className="flex items-center gap-6">
              <img src={IconMercury} alt="" />
              <a className="menu__item uppercase" href="#">
                mercury
              </a>
            </div>
            <img src={Arrow} alt="" />
          </li>
          <li className="flex items-center justify-between pb-5 pt-5 border-b-[0.5px] border-whiteOp">
            <div className="flex items-center gap-6">
              <img src={IconVenus} alt="" />
              <a className="menu__item uppercase" href="#">
                venus
              </a>
            </div>
            <img src={Arrow} alt="" />
          </li>
          <li className="flex items-center justify-between pb-5 pt-5 border-b-[0.5px] border-whiteOp">
            <div className="flex items-center gap-6">
              {" "}
              <img src={IconEarth} alt="" />
              <a className="menu__item uppercase" href="#">
                earth
              </a>
            </div>
            <img src={Arrow} alt="" />
          </li>
          <li className="flex items-center justify-between pb-5 pt-5 border-b-[0.5px] border-whiteOp">
            <div className="flex items-center gap-6">
              {" "}
              <img src={IconMars} alt="" />
              <a className="menu__item uppercase" href="#">
                mars
              </a>
            </div>
            <img src={Arrow} alt="" />
          </li>
          <li className="flex items-center justify-between pb-5 pt-5 border-b-[0.5px] border-whiteOp">
            <div className="flex items-center gap-6">
              <img src={IconJupiter} alt="" />
              <a className="menu__item uppercase" href="#">
                jupiter
              </a>
            </div>
            <img src={Arrow} alt="" />
          </li>
          <li className="flex items-center justify-between pb-5 pt-5 border-b-[0.5px] border-whiteOp">
            <div className="flex items-center gap-6">
              <img src={IconSaturn} alt="" />
              <a className="menu__item uppercase" href="#">
                saturn
              </a>
            </div>
            <img src={Arrow} alt="" />
          </li>
          <li className="flex items-center justify-between pb-5 pt-5 border-b-[0.5px] border-whiteOp">
            <div className="flex items-center gap-6">
              <img src={IconUranos} alt="" />
              <a className="menu__item uppercase" href="#">
                uranos
              </a>
            </div>
            <img src={Arrow} alt="" />
          </li>
          <li className="flex items-center justify-between pb-5 pt-5 ">
            <div className="flex items-center gap-6">
              <img src={IconNeptune} alt="" />
              <a className="menu__item uppercase" href="#">
                neptune
              </a>
            </div>
            <img src={Arrow} alt="" />
          </li>
        </ul>
      </div>

      <div className="flex gap-11 relative mt-[75px] items-center justify-center border-b border-whiteOp">
        <button
          id="overviewButton"
          className="pt-5 pb-4 border-b-4 border-solid border-white border-opacity-0 hover:border-b-4 hover:border-solid hover:border-smerald text-white text-[9px] font-bold font-spartan uppercase tracking-widest"
        >
          Overview
        </button>
        <button
          id="internalStructureButton"
          className="pt-5 pb-4 border-b-4 border-solid border-white border-opacity-0 hover:border-b-4 hover:border-solid hover:border-smerald text-white text-[9px] font-bold font-spartan uppercase tracking-widest"
        >
          Internal
        </button>
        <button
          id="surfaceGeologyButton"
          className="pt-5 pb-4 border-b-4 border-solid border-white border-opacity-0 hover:border-b-4 hover:border-solid hover:border-smerald text-white text-[9px] font-bold font-spartan uppercase tracking-widest"
        >
          Surface
        </button>
      </div>
    </div>
  );
}
