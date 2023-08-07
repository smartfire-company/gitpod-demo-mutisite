const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const hostname = req.hostname;
  let content = `Hostname: ${hostname}`;
  if(hostname.startsWith("3000")) {
    content += `<br/>You are on the main Site`
  } else {
    content += `<br/>You are on the ${hostname.split("3000")[0]} Site`
  }
  res.send(
    content
  )
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
