const express = require('express');
const bodyParser = require('body-parser');
const surveyRoutes = require('./routes/surveyRoutes');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./database');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use('/api/survey', surveyRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  sequelize.sync();
});
