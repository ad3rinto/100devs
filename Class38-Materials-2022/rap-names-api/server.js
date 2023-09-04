const express = require("express");
const app = express();
const PORT = 8000;


const rappers = {
    "21 savage": {
        "age": 23,
        "birthName": "Sheyaa Bin Abraham-Joseph",
        "birthLocation": "London, England"
    },
    "50 cents": {
        "age": 43,
        "birthName": "Curtis Jackson",
        "birthLocation": "Compton, Los Angeles"
    },
    "snoop dog": {
        "age": 53,
        "birthName": "Inglewood, California",
        "birthLocation": "London, England"
    }
}

const notFound = {
    "Not found": {
        "age": "Unknown",
        "birthName": "Not found",
        "birthLocation": "Unknown"
    }
}



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")

})


app.get("/api/:rapperName", (req, res) => {
    // console.log(req.event.status)
    const targetRapper = req.params.rapperName.toLowerCase()
    if (targetRapper in rappers) {
        res.json(rappers[targetRapper])
    } else {
        res.json(notFound)
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}!, you better to catch it!! `)
})
