import express, { Request, Response } from "express";

const router = express.Router();

import Comment from "../models/Comment";

/**
 *  @route GET api/comment/serious
 *  @desc Get serious comment
 *  @access Public
 */
router.get("/serious", async (req: Request, res: Response) => {
    try {
        const comment = await Comment.find({ parrot: "serious" });
        res.json(comment);

        if (!comment) {
            return res.status(400).json({ msg: "Null value" });
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

/**
 *  @route GET api/comment/humor
 *  @desc Get humor comment
 *  @access Public
 */
router.get("/humor", async (req: Request, res: Response) => {
    try {
        const comment = await Comment.find({ parrot: "humor" });
        res.json(comment);

        if (!comment) {
            return res.status(400).json({ msg: "Null value" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;