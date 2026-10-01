const Contact = require("../Models/Contact");

const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      message: "Message saved successfully",
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to save message",
    });
  }
};

module.exports = {
  createContact,
};
