import Booking from "../model/Booking.Model.js";

// Create a new booking
export const postApi = async (req, res) => {
  try {
    const { name, email, destination } = req.body;

    // Validate required fields
    if (!name || !email || !destination) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const booking = new Booking(req.body);
    const result = await booking.save();

    res.status(201).json({ msg: "Booking created successfully", result });
  } catch (err) {
    res.status(500).json({ msg: "Internal server error", error: err.message });
  }
};

// Get all bookings
export const getApi = async (req, res) => {
  try {
    const result = await Booking.find();
    res.status(200).json({ msg: "Bookings retrieved successfully", result });
  } catch (err) {
    res.status(500).json({ msg: "Internal server error", error: err.message });
  }
};
