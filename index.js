import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log('hello cicd on develop');
    res.json('Hello cicd on develop');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
}); 