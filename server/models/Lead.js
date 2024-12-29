const mongoose = require("mongoose");

// סכמת ליד
const leadSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        newsletterConsent: { type: Boolean, default: false }, // ברירת מחדל ללא הסכמה
        note: { type: String, default: "" }, // שדה הערות אופציונלי
    },
    {
        timestamps: true, // מוסיף createdAt ו-updatedAt
    }
);

const Lead = mongoose.model("Lead", leadSchema);

module.exports = Lead;
