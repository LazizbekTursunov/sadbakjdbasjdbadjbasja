import "./Dark.css";
import Brat from "../img/BratCoffee.jpg";

function Dark() {
  return (
    <>
      <section className="dark">
        <div className="container">
          <img
            className="dark__img"
            src={Brat}
            alt="Coffee Brat"
            width="445"
            height="520"
          />

          <div className="dark__info">
            <h1 className="dark__heading">Our commitment</h1>
            <p className="dark__text">
              We’re built on a simple mission and a commitment to doing good
              along the way. We want to make it easy for you to discover and
              brew the world’s best coffee at home. It all starts at the source.
              To locate the specific lots we want to purchase, we travel nearly
              60 days a year trying to understand the challenges and
              opportunities in each of these places. We collaborate with
              exceptional coffee growers and empower a global community of
              farmers through with well above fair-trade benchmarks. We also
              offer training, support farm community initiatives, and invest in
              coffee plant science. Curating only the finest blends, we roast
              each lot to highlight tasting profiles distinctive to their native
              growing region.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dark;
