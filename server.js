const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample route
app.get('/api/cruises', (req, res) => {
  res.json({ message: 'List of cruises will be here' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
