import express from "express";

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Welcome to my server!!');
});

app.get('/me', (req, res) =>{
  res.send('Welcome Derek! node 2 server')
} )

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});