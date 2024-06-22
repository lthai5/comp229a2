//main server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//Routes double dot
const productRoutes = require('../routes/product');

//instantiate my db
mongoose.connect('mongodb+srv://lthai5:Password1@cluster0.7igjstm.mongodb.net/Marketplace');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Marketplace application.' });
  });
  
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

