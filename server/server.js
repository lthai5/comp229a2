const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//Routes
const projectRoutes = require('./routes/project');

//instantiate my db
mongoose.connect('mongodb+srv://lthai5:Password1@cluster0.7igjstm.mongodb.net/projects');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/projects', projectRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

