import express from "express";
import Contact from "../model/contact.model.js";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("Contact request body:", req.body);

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Save message to MongoDB
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();
    console.log("Saved to MongoDB:", newMessage);

    // Send email if env variables exist
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: email,
          to: process.env.EMAIL_USER,
          subject: `New Contact Message from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
      } catch (mailError) {
        console.error("Email send error:", mailError);
      }
    } else {
      console.log("EMAIL_USER or EMAIL_PASS not set. Skipping email send.");
    }

    res.status(200).json({ success: true, message: "Message saved and email sent successfully!" });

  } catch (error) {
    console.error("Contact route error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
