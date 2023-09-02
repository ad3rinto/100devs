const express = require("express");
const app = express();
const PORT = 8000;


const rappers = {
    "21 savage": {
        "age": 23,
        "birthName": "Sheyaa Bin Abraham-Joseph",
        "birthLocation": "London, England"
    },
    "50 Cents": {
        "age": 43,
        "birthName": "Curtis Jackson",
        "birthLocation": "Compton, Los Angeles"
    },
    "Snoop Dog": {
        "age": 53,
        "birthName": "Inglewood, California",
        "birthLocation": "London, England"
    }
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")

})


app.get("/api/:rapperName", (req, res) => {
    // console.log(req.event.status)
    const targetRapper = req.params.rapperName
    if (targetRapper in rappers) {
        res.json(rappers[targetRapper])
    } else {
        res.send("<h2>Rapper Details Not found</h2>")
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}!, you better to catch it!! `)
})
