const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    contentId: Number,
    artistContentId: Number,
    artistName: String,
    completitionYear: Number,
    yearAsString: String,
    width: Number,
    image: String,
    height: Number
});

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
 