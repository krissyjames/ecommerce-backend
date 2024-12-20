const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors({}));


const PORT = process.env.REACT_APP_PORT;
const URL = process.env.REACT_APP_URL;
app.listen(PORT, () => {
    console.log(`Server runnning on ${URL}:${PORT}`);
})