import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
    return (
        <div className="privacy-policy">
            <div style={{ padding: "50px" }}>
                <h1>מדיניות פרטיות</h1>
                <p>
                    ברוכים הבאים לאתר <strong>Sea Inside</strong>. פרטיות המשתמשים שלנו חשובה לנו, ולכן הכנו מדיניות פרטיות זו כדי להסביר כיצד אנו אוספים, משתמשים ושומרים על המידע שלך.
                </p>

                <h2>איזה מידע אנו אוספים?</h2>
                <p>אנו אוספים מידע שאתה מספק לנו באופן ישיר, למשל כאשר אתה ממלא טופס באתר לצורך קבלת מידע על <strong>סדנת הגלישה שלנו</strong>.</p>
                <ul>
                    <li>שם מלא</li>
                    <li>מספר טלפון</li>
                    <li>כתובת אימייל</li>
                    <li>עיר מגורים</li>
                    <li>מידע נוסף שאתה מספק לנו מרצונך החופשי</li>
                </ul>

                <h2>כיצד אנו משתמשים במידע?</h2>
                <p>אנו משתמשים במידע שנאסף למטרות הבאות:</p>
                <ul>
                    <li>יצירת קשר ומתן מידע על סדנת הגלישה שלנו</li>
                    <li>שליחת עדכונים, הצעות שיווקיות ומידע נוסף על הפעילות שלנו</li>
                    <li>שיפור חוויית המשתמש באתר</li>
                </ul>

                <h2>האם המידע שלך מועבר לגורמים חיצוניים?</h2>
                <p>אנו לא מוכרים, משכירים או מעבירים את המידע שלך לצדדים שלישיים, למעט במקרים בהם אנו נדרשים לכך על פי חוק.</p>

                <h2>שמירה ואבטחת מידע</h2>
                <p>אנו מיישמים אמצעי אבטחה מתקדמים כדי לשמור על המידע האישי שלך ולמנוע גישה לא מורשית.</p>

                <h2>זכויותיך בנוגע למידע האישי</h2>
                <p>בכל עת, באפשרותך:</p>
                <ul>
                    <li>לבקש למחוק את פרטיך ממאגר המידע שלנו</li>
                    <li>לבקש לעדכן מידע אישי</li>
                    <li>לבקש הסבר על המידע שאספנו</li>
                </ul>

                <h2>עוגיות (Cookies)</h2>
                <p>האתר שלנו משתמש בקובצי <strong>Cookies</strong> כדי לשפר את חוויית המשתמש. באפשרותך לשלוט על הגדרות העוגיות בדפדפן שלך.</p>

                <h2>צור קשר</h2>
                <p>אם יש לך שאלות או בקשות בנוגע למדיניות הפרטיות שלנו, ניתן לפנות אלינו באמצעות טופס יצירת קשר בעמוד הבית</p>

                <p style={{ marginTop: "30px", textAlign: "center" }}>
                    <Link to="/" className="home-link">חזרה לעמוד הבית</Link>
                </p>
            </div>
        </div>
    );
}
