const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Simple REST API is running successfully!"
    });
});

// Get users
app.get("/api/users", (req, res) => {
    res.json([
        { id: 1, name: "Syed Ibrahim", email: "syed@example.com" },
        { id: 2, name: "John Doe", email: "john@example.com" }
    ]);
});

// Get single user
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);

    res.json({
        id: id,
        name: "Syed Ibrahim",
        email: "syed@example.com"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});