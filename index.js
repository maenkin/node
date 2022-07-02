const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Membuat Kucing Berlari"));
app.get("/makan", (req, res) => res.send("udah makan?"));
app.listen(port, () => console.log(`aplikasi berjalan di port ${port}`));
