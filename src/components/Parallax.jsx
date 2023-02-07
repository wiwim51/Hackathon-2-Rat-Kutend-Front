import RatHome from "../assets/images/2500rat.png";
import { useEffect, useRef } from "react";

const Parallax = () => {
  const bgRef = useRef(null);
  const fgRef = useRef(null);

  const onMouseMove = (event) => {
    const posX = event.clientX - window.innerWidth / 2;
    const posY = event.clientY - window.innerHeight / 2;
    const vRatio = posY / fgRef.current.offsetHeight / 2;
    const hRatio = posX / fgRef.current.offsetWidth / 2;

    bgRef.current.style.transform = `translate(${hRatio * -10}%, ${
      vRatio * -10
    }%)`;
    fgRef.current.style.transform = `translate(${hRatio * 10}%, ${
      vRatio * 10
    }%)`;
  };
  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div className="parallax">
        <div className="shadowrat bg-layer parallax-layer" ref={bgRef}></div>
        <div className="ratcontainer fg-layer parallax-layer" ref={fgRef}>
          <img src={RatHome} alt="rat" className="rathome"></img>
        </div>
        <div className="frontcontainer"></div>
      </div>
    </>
  );
};

export default Parallax;
