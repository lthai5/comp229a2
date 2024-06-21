const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/data', (req, res) => {
    res.json({message: 'Hello from server'})
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

