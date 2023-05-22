/* Author: Juan Sebastian Peña Angarita */

console.log("Hello World");
//importing express module
const express = require("express");
//importing config module
const {port} = require("./config");
//importing routes module
const mainRoute = require("./routes/index.routes.js");
const routes = require("./routes/tasks.routes.js");

//creating express app
const app = express();

//middlewares
app.use(express.json());

//main route
app.use('/api', mainRoute)
app.use('/api', routes);

//listening in the port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
