const Profile = require("../models/Profile");
const path = require("path");
const fs = require("fs");

exports.getProfile = async (req, res) => {
  const userId = req.user.id;
  const profile = await Profile.findOne({ userId });
  res.json(profile);
};

exports.updateProfile = async (req, res) => {
  const { name, age, bio, address, phone } = req.body;
  const userId = req.user.id;
  const profilePicture = req.file ? req.file.filename : undefined;

  const updateData = { name, age, bio, address, phone };
  if (profilePicture) updateData.profilePicture = profilePicture;

  let profile = await Profile.findOneAndUpdate({ userId }, updateData, {
    new: true,
    upsert: true,
  });

  res.json(profile);
};
