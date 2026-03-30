import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log('hello develop branch');
    res.json('Hello develop branch');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
}); 