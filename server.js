const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();

app.use(cors());

const upload = multer();

app.post("/convert", upload.single("file"), async (req, res) => {

    if (!req.file) {
        return res.status(400).json({
            error: "No file uploaded"
        });
    }

    res.json({
        success: true,
        message: "File received successfully",
        filename: req.file.originalname
    });

});

app.get("/", (req, res) => {
    res.send("PDF Converter API Running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server started");
});
