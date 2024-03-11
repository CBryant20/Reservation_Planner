const prisma = require("./prisma");
const router = require("express").Router();
module.exports = router;

router.get ("/", async (req, res) => {
    try {
        const reservations = await prisma.reservation.findMany();
        res.json(reservations);
    }
})