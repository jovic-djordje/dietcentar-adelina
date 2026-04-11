import { Logo } from "../assets/Images";
import "./nav.style.css";

const Navigation = () => {
  return (
    <header>
      <div className="header-holder">
        <Logo className="logo" />
        <nav>
          <ul className="nav-holder">
            <li className="nav-item">O centru</li>
            <li className="nav-item">O meni</li>
            <li className="nav-item">Usluge</li>
          </ul>
        </nav>
        <button className="nav-btn">Kontakt</button>
      </div>
    </header>
  );
};

export default Navigation;
