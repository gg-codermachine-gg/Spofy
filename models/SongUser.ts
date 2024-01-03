import mongoose, { Schema } from "mongoose";

const UserSongSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  songId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Song", // Reference to the Song schema
    required: true,
  },
});

export default UserSongSchema;
