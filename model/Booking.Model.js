import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  destination: { type: String },
});

const Booking = mongoose.model("Booking", BookingSchema);

export default Booking;
