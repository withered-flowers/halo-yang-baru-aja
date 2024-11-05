const express = require("express");
const port = 3000;

const app = express();

app.listen(port, (_) => console.log("Apps is working at port:" + port));
