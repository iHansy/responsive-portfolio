
const express = require('express');
const app = express();

// Route includes
const mainRouter = require('./routes.js');

/* Routes */
app.use('/api/routes', mainRouter);
app.use(express.static('/server/public'))

// Serve static files
app.use(express.static('build'));

//testing
app.get('/img-files', function(req, res) {
    const testing = 'testing'
    res.send(testing);
});

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
