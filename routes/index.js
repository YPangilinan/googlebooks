const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

//if no API routes are hit, send React app
router.use(function(req,res){
    res.sendFile(path.join(__dirname, "../clinet/build/index.html"));
});

module.exports = router;