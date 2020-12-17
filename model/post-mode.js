import mongoose from 'mongoose';
const { Schema } = mongoose;

const postsSchema = new Schema({
    title: String,
    author: String,
    content: String,
    postImage: String,
    likeCount: { type: Number, default: 0 },
    hashTag: String,
    comments: [{ body: String, date: { type: Date, default: Date.now } }],
    date: { type: Date, default: Date.now },
});


const PostsSchema = mongoose.model('PostsSchema', postsSchema);

export default PostsSchema;
