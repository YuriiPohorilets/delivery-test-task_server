const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const connectDb = require('./db/connection');

const authRoutes = require('./routes/api/auth');
const shopRoutes = require('./routes/api/shops');
const orderRoutes = require('./routes/api/orders');

const configPath = path.join(__dirname, '.env');

require('dotenv').config({
  path: configPath,
});

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/shops', shopRoutes);
app.use('/api/order', orderRoutes);

connectDb();

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
