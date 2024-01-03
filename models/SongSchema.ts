import mongoose, { Schema } from "mongoose";

const SongSchema = new Schema({
  title: String,
  artist: String,
  album: String,
  genre: String,
  duration: Number,
  userId: String,
  Liked: Boolean,
});

const Songs = mongoose.model("songs", SongSchema);

export default SongSchema;
