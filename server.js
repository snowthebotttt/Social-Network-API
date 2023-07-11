const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/social-network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
