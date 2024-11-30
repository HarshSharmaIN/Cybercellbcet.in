require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');
const eventRouter = require('./routes/eventsRoutes');

const app = express();
app.use(express.json());
app.use(cors(
  {
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
  }
));

try {
  mongoose.connect(process.env.MONGO_URI);
  console.log('Connected to the database');
} catch (error) {
  console.log('Error connecting to the database:', error.message);
}

app.use('/users', userRouter);
app.use('/events', eventRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});