import "./FloatingWhatsApp.css";

export default function FloatingWhatsApp() {
  const phoneNumber = "+972527483010"; // הכנס כאן את מספר ה-WhatsApp שלך
  const message = encodeURIComponent("היי נטלי :) אשמח לשמוע פרטים על סדנת Sea-Inside");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
}
