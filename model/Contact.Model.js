import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  message: { type: String },
});

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;
