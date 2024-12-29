const schemas = require("../schemas/leadsSchema");
const Lead = require("../models/Lead");
const sendLeadEmail = require("../services/mailer"); // ייבוא הפונקציה לשליחת מייל

const signUp = async (req, res) => {
    console.log(req.body); // הוסף כאן כדי לראות את הנתונים שמגיעים
    const { error, value } = schemas.createNewLead.validate(req.body);
    if (error) {
        return res.status(400).json({ error: "Validation error", details: error.details });
    }

    try {
        // חיפוש ליד עם אותו אימייל
        const existingLead = await Lead.findOne({ email: value.email });
        if (existingLead) {
            // אם הליד כבר קיים, ניצור ליד חדש עם הערה
            const newLead = new Lead({
                name: value.name,
                phone: value.phone,
                email: value.email,
                note: "This lead already existed",
            });

            await newLead.save();

            // שליחת מייל אם הליד כבר קיים
            await sendLeadEmail(newLead);

            return res.status(200).json({ message: "Lead already exists, new lead added", lead: newLead });
        } else {
            // יצירת ליד חדש אם לא קיים
            const newLead = new Lead({
                name: value.name,
                phone: value.phone,
                email: value.email,
                newsletterConsent: value.newsletterConsent !== undefined ? value.newsletterConsent : false, // פה אתה שומר את הערך
            });


            await newLead.save();

            // שליחת מייל אם זה ליד חדש
            await sendLeadEmail(newLead);

            res.status(201).json({ message: "New lead created successfully", lead: newLead });
        }
    } catch (err) {
        console.error("Error saving lead:", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    signUp,
};
