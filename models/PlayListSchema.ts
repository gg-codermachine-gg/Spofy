import mongoose, { Schema } from "mongoose";
import SongSchema from "./SongSchema";

const PlaylistSchema = new Schema({
  name: String,
  description: String,
  songs: [SongSchema],
});


const playlist = mongoose.model("playlist" , PlaylistSchema);

export default PlaylistSchema;
