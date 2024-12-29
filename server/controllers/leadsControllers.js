const schemas = require("../schemas/leadsSchema");
const Lead = require("../models/Lead");
const sendLeadEmail = require("../services/mailer"); // פונקציה לשליחת מייל

const signUp = async (req, res) => {
    const { error, value } = schemas.createNewLead.validate(req.body);

    // אימות קלטים
    if (error) {
        return res.status(400).json({ error: "Validation error", details: error.details });
    }

    try {
        // בדיקת קיום ליד עם אותו אימייל
        const existingLead = await Lead.findOne({ email: value.email });

        if (existingLead) {
            // אם קיים, נוסיף ליד חדש עם הערה
            const newLead = new Lead({
                name: value.name,
                phone: value.phone,
                email: value.email,
                note: "This lead already existed",
            });

            await newLead.save();

            // שליחת מייל לליד קיים
            await sendLeadEmail(newLead);

            return res.status(200).json({ message: "Lead already exists, new lead added", lead: newLead });
        } else {
            // יצירת ליד חדש
            const newLead = new Lead({
                name: value.name,
                phone: value.phone,
                email: value.email,
                newsletterConsent: value.newsletterConsent ?? false, // הגדרה של ברירת מחדל
            });

            await newLead.save();

            // שליחת מייל לליד חדש
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
