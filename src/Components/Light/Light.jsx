import "./Light.css";
import ManwithCoffee from "../img/ManthatCapturesCoffeeCup.jpg";

function Light() {
  return (
    <>
      <section className="light">
        <div className="container">
          <div className="light__info">
            <h1 className="light__heading">Uncompromising quality</h1>
            <p className="light__text">
              Although we work with growers who pay close attention to all
              stages of harvest and processing, we employ, on our end, a
              rigorous quality control program to avoid over-roasting or baking
              the coffee dry. Every bag of coffee is tagged with a roast date
              and batch number. Our goal is to roast consistent, user-friendly
              coffee, so that brewing is easy and enjoyable.
            </p>
          </div>

          <img
            className="light__img"
            src={ManwithCoffee}
            alt="ManWithCoffee"
            width="445"
            height="474"
          />
        </div>
      </section>
    </>
  );
}

export default Light;
