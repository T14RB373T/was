const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("✅ WA Bot aktif di Render!");
});

app.listen(3000, () => console.log("🌍 Server listening on port 3000"));
