const express = require('express');

const app = express();
const PORT = 3000;

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
const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://ayush:4ypoSqlp5599P7Ws@bcsmartg.ckdasmk.mongodb.net/test";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "Back to the Future" };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running,and App is listening on port "+ PORT)
    else
		console.log("Error occurred, server can't start", error);
	}
);
