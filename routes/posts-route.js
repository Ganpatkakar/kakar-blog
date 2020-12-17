import express from "express";
import {
    GetPostController,
    GetPostsController,
    CreatePostController,
    UpdatePostController,
    RemovePostController,
    UpdateLike
} from "../controllers/posts-controller.js";

const router = express.Router();

router
    .get('/:id', GetPostController)
    .get('/', GetPostsController)
    .post('/', CreatePostController)
    .patch('/:id', UpdatePostController)
    .delete('/:id', RemovePostController)
    .patch('/update-like/:id', UpdateLike);

export default router;
