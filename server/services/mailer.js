const nodemailer = require("nodemailer");

/* process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; */


const sendLeadEmail = async (lead) => {
    const { name, phone, email } = lead;
    const currentDate = new Date().toLocaleString("he-IL", {
        timeZone: "Asia/Jerusalem",
    });

    // הגדרת חיבור ל-Gmail
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER, // המייל שיישלח ממנו
            pass: process.env.EMAIL_PASS, // סיסמת אפליקציה
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "natirubrub@gmail.com", // המייל שלך
        subject: "התקבל ליד חדש באתר Sea-Inside",
        html: `
        <h2>התקבל ליד חדש באתר Sea-Inside</h2>
        <p><strong>שם:</strong> ${name}</p>
        <p><strong>טלפון:</strong> ${phone}</p>
        <p><strong>אימייל:</strong> ${email}</p>
        <p><strong>תאריך ושעה:</strong> ${currentDate}</p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

module.exports = sendLeadEmail;
