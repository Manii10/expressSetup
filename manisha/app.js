// app.js
import express from "express";

const app = express();
const PORT = 5000;

;

/**
 * 1. Simple root route
 */
app.get("/", (req, res) => {
  res.send("Hello World");
});

/**
 * 2. Example GET route with plain response
 */
app.get("/register", (req, res) => {
  res.json({ message: "This is a Register Page" });
});

app.get("/global", (req, res) => {
  res.json({ message: "This is a Global Page" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});