import Contact from "../model/Contact.Model.js";
export const postApi = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const booking = new Contact(req.body);
    const result = await booking.save();

    res.status(201).json({ msg: "contact sumited successfully", result });
  } catch (err) {
    res.status(500).json({ msg: "Internal server error", error: err.message });
  }
};
