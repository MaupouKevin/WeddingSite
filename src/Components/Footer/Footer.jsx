import { Link } from "react-router-dom";
import footerLogo from "../../assets-img/logo.png";
import maupumbsLogo from "../../assets-img/maupumbs.png";

function Footer() {
  const effectiveYear = new Date().getFullYear();
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="footer">
      <Link className="footer_link" onClick={handleLinkClick}>
        <img className="footer_logo" src={footerLogo} alt="logo" />
      </Link>
      <div className="footer_copyright">
        <p className="footer_year">
          &copy;
          {effectiveYear}
        </p>
        <p>Shifumi. All rights reserved</p>
      </div>
      <div className="footer_credits">
        <p>Fait avec Amour par</p>
        <img
          className="footer_credits_maupumbsLogo"
          src={maupumbsLogo}
          alt="logo"
        />
      </div>
    </footer>
  );
}
export default Footer;
