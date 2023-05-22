const express = require("express");
//importing the pool from db.js
const {pool} = require("../db.js");

//creating a router to create multiple routes
const router = express.Router();

//this is the main route
router.get("/", (req, res) => {
    res.send("Hello World");
    }
);

//route to test the connection to the database
router.get("/ping", async (req, res) => {
    //when this route is called, execute a pool query ans save the result in rows
    const [rows] = await pool.query("SELECT 1 + 1 AS solution");
    //return the result
    console.log(rows[0]);
    res.json(rows[0]);
    }
);

//exporting the router
module.exports = router;