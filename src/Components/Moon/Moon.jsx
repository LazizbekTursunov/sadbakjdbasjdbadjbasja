import "./Moon.css";
import Map1 from "../img/Map1.png";
import Map2 from "../img/Map2.png";
import Map3 from "../img/Map3.png";

function Moon() {
  return (
    <>
      <section className="moon">
        <div className="container">
          <h2 className="moon__title">Our headquarters</h2>
          <ul className="moon__list">
            <li className="moon__item">
              <img
                className="moon__img"
                src={Map1}
                alt="Map"
                width="40"
                height="49"
              />
              <h2 className="moon__heading">United Kingdom</h2>
              <p className="moon__text">
                68 Asfordby Rd <br />
                Alcaston <br /> SY6 1YA <br /> +44 1241 918425
              </p>
            </li>

            <li className="moon__item">
              <img
                className="moon__img"
                src={Map2}
                alt="Map"
                width="40"
                height="49"
              />
              <h2 className="moon__heading">Canada</h2>
              <p className="moon__text">
                1528 Eglinton Avenue <br /> Toronto <br /> Ontario M4P 1A6{" "}
                <br /> +1 416 485 2997
              </p>
            </li>

            <li className="moon__item">
              <img
                className="moon__img"
                src={Map3}
                alt="Map"
                width="40"
                height="49"
              />
              <h2 className="moon__heading">Australia</h2>
              <p className="moon__text">
                36 Swanston Street <br /> Kewell <br /> Victoria <br /> +61 4
                9928 3629
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Moon;
