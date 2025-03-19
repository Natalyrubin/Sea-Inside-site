import "./ContactForm.css";
import React, { useState } from "react";
import { ILeadSignup } from "../../interfaces/LeadInterfaces";
import { Link } from "react-router-dom";

export default function ContactForm() {
  const [formData, setFormData] = useState<ILeadSignup>({
    name: "",
    phone: "",
    email: "",
    newsletterConsent: true,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    if (type === "checkbox") {
      // נוודא ששדה ה-checkbox יתעדכן כראוי
      setFormData({ ...formData, [name]: checked });
    } else {
      // עדכון המידע עבור שדות אחרים כמו רגילים
      setFormData({ ...formData, [name]: value });
    }
  };




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);  // הדפס את הערכים לפני שליחה
    try {
      const response = await fetch("https://www.sea-inside.co.il/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); // הדפס את התגובה מהשרת
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }


      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };



  return (
    <div className="ContactForm" id="ContactForm">
      <div className="ContactFormContainer">
        {isSubmitted ? ( // אם הטופס הושלם, הצג הודעה
          <p>הפרטים שלך התקבלו בהצלחה, נחזור אליך בהקדם.</p>
        ) : (
          // אם לא, הצג את הטופס
          <form onSubmit={handleSubmit}>
            <div id="topForm">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="שם מלא"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="טלפון"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="אימייל"
                required
              />
            </div>

            <div id="buttomForm">
              <label id="checkbox">
                <input
                  type="checkbox"
                  name="newsletterConsent"
                  checked={formData.newsletterConsent}
                  onChange={handleChange}
                />
                הנני מאשר/ת קבלת מידע, הצעות שיווקיות ו/או דברי פרסומת מ- Sea-Inside{" "}
                <Link to="/privacy-policy" style={{ color: "blue", textDecoration: "underline" }}>
                  למדיניות הפרטיות
                </Link>.
              </label>
              <button type="submit">שליחה</button>
            </div>
          </form>

        )}
      </div>
    </div>
  );
}
