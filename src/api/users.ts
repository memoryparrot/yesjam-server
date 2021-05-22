import express, { Request, Response } from "express";

const router = express.Router();

import User from "../models/User";

/**
 *  @route Get api/users
 *  @desc
 *  @access Public
 */
router.get("/", async (req: Request, res: Response) => {
    try {
        const user = await User.findById("60a93badf4ef5e887b97ab58");
        res.json(user);

        if (!user) {
            return res.status(400).json({ msg: "Null value" });
        }

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;