const express = require("express");

const app = express();

app.get('/',(req,res) => {
    req.json({
        msg : "hello from docker"
    })
});

app.listen(3000);