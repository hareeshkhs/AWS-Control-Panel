const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/ec2", require("./routes/ec2Routes.js"));
app.use("/kp", require("./routes/keypairRoutes.js"));
app.use("/iam", require("./routes/iamRoutes.js"));
app.use("/s3", require("./routes/s3Routes.js"));

app.get("/", (req, res) => {
  res.send("AWS console");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
  console.log("Server is listening");
});
