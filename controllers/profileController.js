import Profile from "../models/Profile.js";

export const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: "Error fetching profiles" });
  }
};

export const addProfile = async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ error: "Error adding profile" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProfile);
  } catch (err) {
    res.status(400).json({ error: "Error updating profile" });
  }
};

export const deleteProfile = async (req, res) => {
  try {
    await Profile.findByIdAndDelete(req.params.id);
    res.json({ message: "Profile deleted" });
  } catch (err) {
    res.status(400).json({ error: "Error deleting profile" });
  }
};
