const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Hardcoded credentials
const USERNAME = "admin";
const PASSWORD = "1234";

// Routes
app.get("/", (req, res) => {
    res.render("login", { message: "" });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === USERNAME && password === PASSWORD) {
        res.send("<h1>Login Successful!</h1>");
    } else {
        res.render("login", { message: "Invalid credentials" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
