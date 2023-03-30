const router = require('express').Router();

router.post("/", (req,res) => {
    const path = new Date().getTime().toString();
    global.cache.set(path,req.body.url);
    return res.render("index",{path: 'http://localhost:3000/'+path});
});

router.get("/:id", (req,res)=>{
    const id = req.params.id;
    const url = global.cache.get(id);
    if(!url) return res.status(404).json({message: "URL not found!!!"});
    return res.status(301).redirect(url);
})
module.exports = router;
