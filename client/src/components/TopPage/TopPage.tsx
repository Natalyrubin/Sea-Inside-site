import "./TopPage.css";

export default function TopPage() {
  return (
    <div className="TopPage" id="TopPage">
      <h1 className="TopPage-title">
        סדנת SEA-INSIDE
        <br /> <span>
          כשעולם הגלישה פוגש את ה-NLP
        </span>
      </h1>
      <div className="floating-icon">
        <img src="/assets/img/surf.png" alt="Floating Icon" />
      </div>
    </div>
  );
}
