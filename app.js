const express = require("express")

const app = express()
const PORT = 5500 | process.env.port

app.get("/", (req, res) => {
    return res.status(200).json(
        [
            { obj: "1" },
            { obj: "1" },
            { obj: "1" },
            { obj: "1" },
            { obj: "1" },
            { obj: "1" },
            { obj: "1" },
            { obj: "1" },
            { obj: "1" },
            { obj: "1" },
            { obj: "1" },
            { obj: "1" },
        ]
    );
})

app.listen(PORT, () => `${PORT} connected`)