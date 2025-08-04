// Call the express server
const express = require("express");

// Call the data parsing tool
const bodyParser = require("body-parser");

// Create an app using the express server
const app = express();

// Establish a default port for the app
const port = 3000;

// Note that the URL is encoded
app.use(bodyParser.urlencoded({extended: true}));

// Convert the data into JSON format
app.use(bodyParser.json());

// Tell the app what port to listen on and
// what to do once the port is active
app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});

// NOTES
// Nodemon is used to monitor the server and auto-restart it.
// MongoDB is installed to manage the DB.