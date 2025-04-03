import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  name: String,
  photo: String,
  description: String,
  address: String,
  latitude: Number,
  longitude: Number,
});

export default mongoose.model("Profile", ProfileSchema);
