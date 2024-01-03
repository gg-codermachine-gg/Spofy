import mongoose, { Schema } from "mongoose";
import SongSchema  from "./SongSchema";
import PlayListSchema from "./PlayListSchema"
import UserSongSchema from "./SongUser"

const UsersSchema = new Schema(
  {
    userName: String,
    password: String,
    email: String,
    id: String,
    ProfilePicture: String,
    lastLogin: String,
    Bio: String,
    Role: String,
    playList:[PlayListSchema],
    likedSongs :[SongSchema],
    userSongs: [UserSongSchema],
    
  },
);

const User = mongoose.model("user", UsersSchema);                                        
export default User;