const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./Database/db")

//middleware
app.use(cors());
app.use(express.json());



//ROUTES//

//Create RunMate
app.post("/createtable", async (req, res) => {
    try {
        const p = await pool.query(`CREATE TABLE "User" (
    User_id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    image TEXT,
    password VARCHAR(255) NOT NULL
)`
        );

        res.json(p);

    } catch (err) {
        console.error(err.message);

    }
})



app.listen(3000, () => {
    console.log("Server has started on port 3000");
})
