import logo from "../../assets-img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header_logo">
        <img src={logo} alt="logo" />
      </Link>

      <div className="header_banner">

        <div className="header_banner_navbar">
          <Link href="#action1">Once Upon A Time</Link>
          <Link to="LoveQuizz">Love Quizz</Link>
          <Link href="#action3">RSVP</Link>
          <Link href="#action3">Livre d'Or</Link>
          <Link href="#action4">Infomations Pratiques</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
