const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const app = express();
const uri ="mongodb+srv://MaupouKevin:3qyh5XmejT9NjDzl@cluster1.pz0jp58.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});


// Route pour vérifier le mot de passe
app.post('/login', async (req, res) => {
  const { password } = req.body;
  
  // Comparer le mot de passe avec le hash stocké
  const match = await bcrypt.compare(password, hashedPassword); // hashedPassword à remplacer par votre mot de passe hashé stocké

  if (match) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: "Mot de passe incorrect" });
  }
});

app.use("/api/weddingwitness", (req, res) => {
  const weddingwitness = [
    {
      _id: "oeihfzeoi",
      title: "ATTIA Adeline",
      description: "Bridesmaid Manager",
    },
    {
      _id: "mlkcfglkj",
      title: "FRANCKHAUSER Elodie",
      description: "Bridesmaid",
    },
    {
      _id: "shimifcft",
      title: "Maupumbs Shifumi",
      description: "Happiness Manager",
    },
    {
      _id: "asdfrhngf",
      title: "SILAVONG Paul",
      description: "Groomsmen & Clown",
    },
    {
      _id: "wxcqsdaze",
      title: "POULAT Tristan",
      description: "Groomsmen",
    },
  ];
  res.status(200).json(weddingwitness);
});


module.exports = app;
