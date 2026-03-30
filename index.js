import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log('hello world v3....');
    res.json('Hello, World v3....');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
}); 