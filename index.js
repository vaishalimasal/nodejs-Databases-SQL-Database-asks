import bodyParser from "body-parser";
import express from "express";

import notesRoutes from "./router/notes.js"

const app = express(); //instatious express server
app.use(bodyParser.json());

const PORT = 3000;

 app.use("/", notesRoutes);

// app.use("/notes", notesRoutes);
// app.get("/", (req, res) => res.send("Welcome to the Notes Taking AApp Api"));
// app.all("*", (req, res) => res.send("page can not be found"));


app.listen(PORT, () => {
  console.log("Running on ", PORT);
});
