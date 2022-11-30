import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  displayPicture: String,
  userName: String,
  handle: String,
  time: String,
  topic: String,
  disliked: Boolean,
  dislikes: Number,
}, {collection: 'tuits'});
export default schema;