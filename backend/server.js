import cors from "cors";
import express from "express";
import { connectTodb } from "./db.js";
import { User } from "./models/User.js";
const app = express();
app.use(cors());

connectTodb();

app.use(express.json());

// create
app.post("/create", async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const userData = await User.create({
      name: name,
      email: email,
      age: age,
    });
    res.json(userData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// read
app.get("/api/showUsers", async (req, res) => {
  try {
    const showAll = await User.find();
    res.json(showAll);
  } catch (error) {
    res.json({ error: error.message });
  }
});

// getByid

app.get("/api/getByID/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userById = await User.findById(id);
    res.json(userById);
  } catch (error) {
    res.json({ error: error.message });
  }
});

// Delete

app.delete("/api/DeleteByID/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userById = await User.findByIdAndDelete(id);
    res.json(userById);
  } catch (error) {
    res.send(error);
  }
});

// update

app.patch("/api/UpdateByID/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const updateById = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.json(updateById);
  } catch (error) {
    res.send(error);
  }
});

app.listen(4100, () => {
  console.log("server running on 4100");
});
