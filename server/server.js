const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const gemini = require("./routes/gemini");

dotenv.config();

const connectDB = require('./config/db');

connectDB();


const app = express();
app.use(cors({
  origin: '*',  
  methods: ['GET', 'POST'],           
}));
app.use(express.json());

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

app.use('/api/upload', require('./routes/ocrRoutes'));
app.use("/api/ask", gemini);
app.use('/api/search-ingredients', require('./routes/ingredientRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 
