const router = require('express').Router();
const {randomGenerator} = require("../../utility/generator.js");

router.post("/", (req, res) => {
    const path = randomGenerator(6);
    global.cache.set(path, req.body.url);
    return res.render("index", { path: 'https://shorturl-lndx.onrender.com/' + path });
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const url = global.cache.get(id);
    if (!url) return res.status(404).json({ message: "URL not found!!!" });
    return res.status(301).redirect(url);
})
module.exports = router;
