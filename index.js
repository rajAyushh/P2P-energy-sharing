const express = require('express');

const app = express();
const PORT = 3000;
const connectDB = require('./db');
console.log("Connecting to DB...");
connectDB();
app.use(express.json());
app.post("/h", (req, res) => {
  const { name } = req.body;

  res.send(`Welcome ${name}`);
});

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});

app.get("/hello", (req, res) => {
  res.set("Content-Type", "text/html");
  res.status(200).send("<h1>Hello GFG Learner!</h1>");
});
app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running,and App is listening on port "+ PORT)
    else
		console.log("Error occurred, server can't start", error);
	}
);
