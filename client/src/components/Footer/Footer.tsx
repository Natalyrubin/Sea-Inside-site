import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="footer-content">
        <div className="footer-text">
          <a href="https://www.facebook.com/SeaInside.SurfNLP"
            target="_blank"
            rel="noopener noreferrer" >
            <img
              decoding="async"
              width="52"
              height="52"
              src={("/assets/img/facebook.png")}
              alt="facebook Logo"
            />
          </a>
          <a href="https://www.instagram.com/nataly_rubin_/"
            target="_blank"
            rel="noopener noreferrer" >
            <img
              decoding="async"
              width="50"
              height="50"
              src={("/assets/img/insta.png")}
              alt="facebook Logo"
            />
          </a>

        </div>
        <div className="footer-links">
          <p>כל הזכויות שמורות © בניית אתרים נטלי רובין </p>
        </div>
      </div>
    </div>
  );
}
