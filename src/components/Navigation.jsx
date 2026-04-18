import { RxHamburgerMenu } from "react-icons/rx";
import "./nav.style.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header id="top">
      <div className="header-holder">
        {isMenuOpen ? (
          <RxCross2 className="header-ham-btn" onClick={toggleMenu} />
        ) : (
          <RxHamburgerMenu className="header-ham-btn" onClick={toggleMenu} />
        )}
      </div>

      <div className={`off-screen-menu ${isMenuOpen ? "active" : ""}`}>
        <div className="off-screen-menu-holder">
          <ul>
            <Link to="/" className="off-screen-menu-link" onClick={toggleMenu}>
              {" "}
              <li className="off-screen-menu-item">Početna</li>
            </Link>
            <Link
              to="/ocentru"
              className="off-screen-menu-link"
              onClick={toggleMenu}
            >
              <li className="off-screen-menu-item">O centru</li>
            </Link>
            <Link
              to="/omeni"
              className="off-screen-menu-link"
              onClick={toggleMenu}
            >
              {" "}
              <li className="off-screen-menu-item">O meni</li>
            </Link>
            <Link
              to="/usluge"
              className="off-screen-menu-link"
              onClick={toggleMenu}
            >
              {" "}
              <li className="off-screen-menu-item">Usluge</li>
            </Link>
            <Link
              to="/kontakt"
              className="off-screen-menu-link"
              onClick={toggleMenu}
            >
              {" "}
              <li className="off-screen-menu-item">Kontakt</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
