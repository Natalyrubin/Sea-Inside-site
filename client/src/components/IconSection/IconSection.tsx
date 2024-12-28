import "./IconSection.css";

export default function IconSection() {
  const icons = [
    { src: "/assets/img/mental-strength.png", title: "לאמן את הגוף והמיינד לגמישות" },
    { src: "/assets/img/girl-power.png", title: "חיזוק תחושת היכולת העצמית" },
    { src: "/assets/img/ayurveda.png", title: "העצמת חוסן מנטלי והרחבת גבולות הנוחות" },
    { src: "/assets/img/yoga.png", title: "הפחתת סטרס ושימור הבריאות הפיזית והמנטלית" },
  ];

  return (
    <div className="IconSection">
      <div className="icon-container">
        {icons.map((icon, index) => (
          <div className="icon-item" key={index}>
            <img src={icon.src} alt={icon.title} className="icon-image" />
            <h3 className="icon-title">{icon.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
