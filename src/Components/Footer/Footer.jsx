import "./Footer.css";
import FooterLogo from "../img/FooterLogo.svg";
import Facebook from "../img/Facebook.png";
import Twitter from "../img/Twitter.png";
import Instagram from "../img/Instagram.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <a className="footer__logo" href="#link">
            <img
              className="footer__img"
              src={FooterLogo}
              alt="Logotip"
              width="237"
              height="27"
            />
          </a>

          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link" href="#link">HOME</a>
            </li>

            <li className="footer__item">
              <a className="footer__link" href="#link">ABOUT US</a>
            </li>

            <li className="footer__item">
              <a className="footer__link" href="#link">Create your plan</a>
            </li>
          </ul>

          <ul className="footer__chart">
            <li className="footer__media">
              <img
                className="footer__social"
                src={Facebook}
                alt="footer"
                width="20"
                height="20"
              />
            </li>

            <li className="footer__media">
              <img
                className="footer__social"
                src={Twitter}
                alt="footer"
                width="20"
                height="20"
              />
            </li>

            <li className="footer__media">
              <img
                className="footer__social"
                src={Instagram}
                alt="footer"
                width="20"
                height="20"
              />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
