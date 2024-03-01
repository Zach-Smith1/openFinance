const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

app.use((req, res, next) => {
  let Referer = req.headers.referer;
  let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  if (ip === '::1' || ip === 'localhost' || ip === '127.0.0.1')  { // for local testing
    next()
  } else if (Referer) {
    if (Referer.startsWith("https://sites.google.com/lcsnw.org/ourlcsnw/")) {
      next();
    } else {
      res.status(403).send(`Access denied. This page must be accessed from the LCSNW intranet, you are accessing it from ${Referer}`);
    }
  } else {
    res.status(403).send(`Access denied. This page must be accessed from the LCSNW intranet, you are accessing it from IP address: ${ip}`);
  }
});

// Serve static files from both 'dist' and 'public' folders
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/public', express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});