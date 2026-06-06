const express = require("express");

const app = express();

app.get('/',(req,res) => {
    req.json({
        msg : "hello from nodejs"
    })
});

app.listen(3000);