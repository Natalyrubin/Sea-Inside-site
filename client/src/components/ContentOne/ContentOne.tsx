import "./ContentOne.css";

export default function ContentOne() {
  return (
    <div className="ContentOne" id="ContentOne">
      <div className="ContentWrapper">
        <div className="TextContainer">
          <h2>ללמוד את יסודות הגלישה והמיינד ב-5 צעדים</h2>
          <p>
            לנווט את החשיבה, להתמודד עם מצבי משבר ולהביא לפריצת דרך בתחומי החיים! <br />
            הסדנה מעניקה לך קורס גלישה למתחילים לצד כלים מתוך עולם ה-NLP, כך שתוכלי להתמודד
            עם האתגרים גם במים וגם בחיים.
          </p>
        </div>
        <div className="ImageContainer">
          <img src="/public/assets/img/brain.png" alt="מוח האדם" />
        </div>
      </div>
    </div>
  );
}
