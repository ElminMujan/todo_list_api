import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.listen(3000);

const items: ItemsType = [];

type ItemType = {
  title: string;
  description: string;
};

type ItemsType = ItemType[];

app.get("/items", (req, res) => {
  res.send(items);
});

app.post("/items", (req, res) => {
  const data = req.body as ItemType;
  items.push(data);

  res.send();
});

app.delete("/items", (req, res) => {
  items.length = 0;
  res.send();
});
