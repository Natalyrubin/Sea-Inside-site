import "./Header.css";
import { useState, useEffect } from "react";

export default function Header() {
  const [opacity, setOpacity] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // מיקום הגלילה האנכית
      const maxScroll = 2500; // מרחק מקסימלי של הגלילה שבו השקיפות נעלמת
      const newOpacity = Math.max(1 - scrollTop / maxScroll, 0); // חישוב אופסיטי
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Header" style={{ opacity }}>
      <div className="header-container">
        <div className="header-icon">
          <a className="icon-link" href="#menu" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 64 64" width="32">
              <g transform="matrix(-1 0 0 1 64 0)">
                <path d="M59.5 18.5H4.5a2 2 0 0 1 0-4h55a2 2 0 0 1 0 4z" fill="#FFFFFF" />
                <path d="M32.5 34.5H4.5a2 2 0 0 1 0-4h28a2 2 0 0 1 0 4z" fill="#FFFFFF" />
                <path d="M59.5 50.5H4.5a2 2 0 0 1 0-4h55a2 2 0 0 1 0 4z" fill="#FFFFFF" />
              </g>
            </svg>
          </a>
        </div>
        <div className="header-logo">
          <a href="https://sea-inside.co.il">
            <img
              decoding="async"
              id="logo"
              src={("/public/assets/img/logoBlueNew.png")}
              alt="Company Logo"
            />
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="overlay-menu" onClick={toggleMenu}>
          <ul className="menu-list">
            <li><a href="#TopPage">ראשי</a></li>
            <li><a href="#ContentOne">SEA-INSIDE:  גלישה והעצמה</a></li>
            <li><a href="#About">אודות</a></li>
            <li><a href="#TheWorkshop">הסדנה</a></li>
            <li><a href="#ContactForm">יצירת קשר</a></li>
          </ul>
          <div className="menu-divider"></div>
          <div className="social-icons">
            <a href="https://www.facebook.com/RubinSuccess" target="_blank" rel="noopener noreferrer">
              <img decoding="async" src="/public/assets/img/facebook.png" alt="facebook Logo" />
            </a>
            <a href="https://www.instagram.com/nataly_rubin_/" target="_blank" rel="noopener noreferrer">
              <img decoding="async" src="/public/assets/img/insta.png" alt="Instagram Logo" />
            </a>
          </div>
        </div>
      )}

    </div>
  );
}
