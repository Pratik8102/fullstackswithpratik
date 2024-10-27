import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.get('/api/jokes', (req, res) => {
  const jokes = [
    "Why don’t scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call fake spaghetti? An impasta!",
    "Why can’t you give Elsa a balloon? Because she will let it go!",
    "Why did the math book look sad? Because it had too many problems."
  ];

  res.json(jokes); // Send the array of jokes as a JSON response
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
