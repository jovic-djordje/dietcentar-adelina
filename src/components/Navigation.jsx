import { Logo } from "../assets/Images";
import { RxHamburgerMenu } from "react-icons/rx";
import "./nav.style.css";

const Navigation = () => {
  return (
    <header>
      <div className="header-holder">
        <RxHamburgerMenu className="header-ham-btn" />
      </div>
    </header>
  );
};

export default Navigation;
