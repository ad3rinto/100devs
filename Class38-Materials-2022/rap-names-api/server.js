const express = require("express");
const app = express();
const PORT = 8000;


const savage = {
    "age": 23,
    "birthName": "Sheyaa Bin Abraham-Joseph",
    "birthLocation": "London, England"
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")

})


app.get("/api", (req, res) => {
    // console.log(req.event.status)
    res.json(savage)
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}!, you better to catch it!! `)
})
