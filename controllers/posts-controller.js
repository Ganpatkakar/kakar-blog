import PostsSchema from "../model/post-mode.js";
import mongoose from 'mongoose';

export const GetPostsController = async (req, res) => {
    try {
        const data = await PostsSchema.find({});
        if (data) {
            res.send({ status: 200, body: data });
        } else {
            res.send({ status: 401, body: null });
        }
    } catch (error) {
        console.log(error);
        res.send({ status: 401, body: null });
    }
}

export const GetPostController = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const data = await PostsSchema.findOne({ _id: mongoose.Types.ObjectId(_id) });
        if (data) {
            res.send({ status: 200, body: data });
        } else {
            res.send({ status: 401, body: null });
        }
    } catch (error) {
        console.log(error);
        res.send({ status: 401, body: null });
    }
}

export const CreatePostController = async (req, res) => {
    const data = req.body;
    try {
        const created_data = await PostsSchema.create(data);
        if (created_data) {
            res.send({ status: 201, body: created_data });
        } else {
            res.send({ status: 401, body: null });
        }
    } catch (error) {
        console.log(error);
        res.send({ status: 401, body: null });
    }
}

export const UpdatePostController = async (req, res) => {
    const { id: _id } = req.params;
    const updated_post = req.body;
    try {
        const foundOne = await PostsSchema.findOne({ _id: mongoose.Types.ObjectId(_id) });
        if (foundOne) {
            const updateData = await foundOne.update(updated_post);
            if (updateData.ok) {
                res.send({
                    status: 201,
                    body: await PostsSchema.findOne({ _id: mongoose.Types.ObjectId(_id) })
                });
            } else {
                res.send({ status: 401, body: null });
            }
        } else {
            res.send({ status: 401, body: null });
        }
    } catch (error) {
        console.log(error);
        res.send({ status: 401, body: null });
    }
}

export const RemovePostController = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const removed = await PostsSchema.findOneAndDelete(_id);
        if (removed) {
            res.send("Deleted !!");
        } else {
            res.send({ status: 401, body: null });
        }
    } catch (error) {
        console.log(error);
        res.send({ status: 401, body: null });
    }
}

export const UpdateLike = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const foundOne = await PostsSchema.findOne({ _id: mongoose.Types.ObjectId(_id) });
        if (foundOne) {
            foundOne.likeCount = foundOne.likeCount + 1;
            const updatedData = await foundOne.updateOne(foundOne);
            if (updatedData.ok) {
                res.send({
                    status: 201,
                    body: await PostsSchema.findOne({ _id: mongoose.Types.ObjectId(_id) })
                });
            } else {
                res.send({ status: 401, body: null });
            }
        } else {
            res.send({ status: 401, body: null });
        }
    } catch (error) {
        console.log(error);
        res.send({ status: 401, body: null });
    }
}
