const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.port || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();

app.use(errorHandler);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/articles', require('./routes/articleRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));
