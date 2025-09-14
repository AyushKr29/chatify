import express from 'express';
 
const router = express.Router();

export default router;

router.get("/auth/signup", (req, res) => {
    res.send("signup endpoint");
    }
);

router.get("/auth/login", (req, res) => {
    res.send("login endpoint");
    }
);

router.get("/logout", (req, res) => {
    res.send("logout endpoint");
    }
);