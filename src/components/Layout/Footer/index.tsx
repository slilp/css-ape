import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <main className="container-center">
        <div className="footer__top">
          <div>
            <a className="d-flex">
              <img
                alt="logo"
                className="footer__icon"
                src="https://www.siambitcoin.com/wp-content/uploads/2022/04/18876.png"
              ></img>
              <span className="footer__logo">CSS APE</span>
            </a>
          </div>
          <div>
            <ul>
              <li className="footer__menu">RESOURCES</li>
              <li>Flowbite</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="footer__menu">FOLLOW US</li>
              <li>Github</li>
              <li>Discord</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="footer__menu">LEGAL</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        {/* <hr></hr> */}
        <div className="footer__bottom">
          <div className="footer__alright">
            © 2022 CSS APE™. All Rights Reserved.
          </div>
          <div>
            <ul className="footer__social">
              <li>Face</li>
              <li>Line</li>
              <li>IG</li>
              <li>Twit</li>
            </ul>
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
