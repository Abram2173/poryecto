// index.js
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const CiclimoModel = require('./models/usuario');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27018/ciclimo");

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    CiclimoModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({ message: "Success", userId: user._id });
                } else {
                    res.json("La contraseña es incorrecta");
                }
            } else {
                res.json("No se encontró el usuario");
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/register', (req, res) => {
    CiclimoModel.create(req.body)
        .then(usuario => res.json(usuario))
        .catch(err => res.json(err));
});

app.get('/register', (req, res) => {
    CiclimoModel.find()
        .then(usuario => res.json(usuario))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Ruta para obtener un usuario específico por su ID
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    CiclimoModel.findById(userId)
        .then(user => res.json(user))
        .catch(err => res.status(500).json({ error: err.message }));
});



app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
