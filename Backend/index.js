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
        // const {}
        const p = await pool.query(`SELECT *
            FROM User`
        );

        res.json(p.rows);

    } catch (err) {
        console.error(err.message);

    }
})



app.listen(3000, () => {
    console.log("Server has started on port 3000");
})
