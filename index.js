import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log('hello develop test');
    res.json('Hello develop test');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
}); 