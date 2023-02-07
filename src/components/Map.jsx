import { useState, useRef, useEffect } from "react";
import death from "../assets/images/death.png";
const Map = () => {
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);
  const [nombreMorts, setNombreMorts] = useState(0);
  const [rats, setRats] = useState([]);
  const [ratSelected, setRatSelected] = useState([]);
  const mapContainerRef = useRef(null);

  const ratClick = (rat, e) => {
    setRatSelected(rat);
    e.target.classList = "disabled";
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartRat"));

    if (items) {
      setRats(items);
    }
  }, []);

  let random;

  function getRandomInt(min, max) {
    return Math.random() * (max - min) + min;
  }

  useEffect(() => {
    const mousemove = (event) => {
      setPageX(event.pageX);
      setPageY(event.pageY);
    };

    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  const addElement = (e) => {
    console.log(ratSelected);
    e.preventDefault();
    random = getRandomInt(1, 5);
    const newImg = document.createElement("img");
    newImg.src = ratSelected.image;
    newImg.classList.add("mapCercle");
    newImg.style.top = `${pageY - 25}px`;
    newImg.style.left = `${pageX - 25}px`;
    newImg.style.transform = `scale(${
      (ratSelected.prix / 10 + getRandomInt(1, 5)) / 4
    })`;
    mapContainerRef.current.appendChild(newImg);
  };
  let dynamicStyles = null;
  const addAnimation = (body) => {
    if (!dynamicStyles) {
      dynamicStyles = document.createElement("style");
      dynamicStyles.type = "text/css";
      document.head.appendChild(dynamicStyles);
    }
    dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
  };
  addAnimation(`
  @keyframes cercle{ 
    from {
      transform: scale(0)
    }
  
    to {
      transform: scale({${random})
    }
`);
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    section.onclick = function (e) {
      setNombreMorts(
        (prevState) =>
          prevState +
          Math.floor(
            e.target.textContent *
              (parseInt((ratSelected.prix / 10 + getRandomInt(1, 5)) * 5) / 100)
          )
      );
    };
  });
  return (
    <>
      <div className="blocMap" ref={mapContainerRef} onClick={addElement}>
        <div className="test">
          <section className="section">0</section>
          <section className="section">200</section>
          <section className="section">150</section>
          <section className="section">75</section>
          <section className="section">90</section>
          <section className="section">255</section>
          <section className="section">121</section>
          <section className="section">204</section>
          <section className="section">105</section>
          <section className="section">87</section>
          <section className="section">0</section>
          <section className="section">0</section>
          <section className="section">0</section>
          <section className="section">0</section>
          <section className="section">60</section>
          <section className="section">260</section>
          <section className="section">350</section>
          <section className="section">150</section>
          <section className="section">140</section>
          <section className="section">79</section>
          <section className="section">0</section>
          <section className="section">1392</section>
          <section className="section">744</section>
          <section className="section">258</section>
          <section className="section">1556</section>
          <section className="section">15463</section>
          <section className="section">2890</section>
          <section className="section">249</section>
          <section className="section">384</section>
          <section className="section">212</section>
          <section className="section">25</section>
          <section className="section">1436</section>
          <section className="section">748</section>
          <section className="section">635</section>
          <section className="section">984</section>
          <section className="section">451</section>
          <section className="section">878</section>
          <section className="section">125</section>
          <section className="section">350</section>
          <section className="section">290</section>
          <section className="section">0</section>
          <section className="section">10</section>
          <section className="section">254</section>
          <section className="section">1548</section>
          <section className="section">654</section>
          <section className="section">615</section>
          <section className="section">261</section>
          <section className="section">514</section>
          <section className="section">666</section>
          <section className="section">333</section>
          <section className="section">10</section>
          <section className="section">40</section>
          <section className="section">264</section>
          <section className="section">661</section>
          <section className="section">894</section>
          <section className="section">112</section>
          <section className="section">625</section>
          <section className="section">332</section>
          <section className="section">998</section>
          <section className="section">115</section>
          <section className="section">0</section>
          <section className="section">0</section>
          <section className="section">210</section>
          <section className="section">265</section>
          <section className="section">514</section>
          <section className="section">255</section>
          <section className="section">789</section>
          <section className="section">357</section>
          <section className="section">841</section>
          <section className="section">655</section>
          <section className="section">0</section>
          <section className="section">20</section>
          <section className="section">630</section>
          <section className="section">636</section>
          <section className="section">354</section>
          <section className="section">561</section>
          <section className="section">215</section>
          <section className="section">9563</section>
          <section className="section">141</section>
          <section className="section">652</section>
          <section className="section">0</section>
          <section className="section">745</section>
          <section className="section">321</section>
          <section className="section">612</section>
          <section className="section">2896</section>
          <section className="section">2453</section>
          <section className="section">241</section>
          <section className="section">366</section>
          <section className="section">321</section>
          <section className="section">20</section>
          <section className="section">801</section>
          <section className="section">821</section>
          <section className="section">832</section>
          <section className="section">83</section>
          <section className="section">184</section>
          <section className="section">825</section>
          <section className="section">30</section>
          <section className="section">20</section>
          <section className="section">0</section>
          <section className="section">20</section>
        </div>
        <img
          className="map"
          alt="map"
          src="https://jeanclaudegolvin.com/wp-content/uploads/2018/01/france-carte-chateaux-medievaux-jc-golvin.jpg"
        />
      </div>
      <p className="nombreMorts">
        <img alt="death" src={death} />
        <span> Vous avez libéré {nombreMorts} âmes</span>
      </p>
      <ul className="ratListe">
        {rats.map((rat, i) => (
          <li key={i}>
            <img
              src={rat.image}
              alt={rat.name}
              onClick={(e) => ratClick(rat, e)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Map;
