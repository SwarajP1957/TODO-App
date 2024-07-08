const express = require('express');
const bodyParser = require('body-parser');
const passport = require('./services/authService');
const sequelize = require('./config/database');
const todoRoutes = require('./routes/todoRoutes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/api', todoRoutes);

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  }
);

app.get('/auth/facebook',
  passport.authenticate('facebook')
);

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  }
);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
