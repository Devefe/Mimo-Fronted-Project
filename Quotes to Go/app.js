const quotes = {
 'inspirational': [
 'The best way to predict the future is to invent it.  Alan Kay',
 'Life is 10% what happens to us and 90% how we react to it.  Charles R. Swindoll'
 ],
 'motivational': [
 'Do one thing every day that scares you.  Eleanor Roosevelt',
 'Your time is limited, dont waste it living someone elses life.  Steve Jobs'
 ],
 'funny': [
 'I am not a vegetarian because I love animals; I am a vegetarian because I hate plants.  A. Whitney Brown',
 'A day without sunshine is like, you know, night.  Steve Martin'
 ]
};

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
 console.log(`Quote generator server running on port ${port}`);
});

app.get('/quote', (req, res) => {
 const categories = Object.keys(quotes);
 const randomCategory = categories[Math.floor(Math.random() * categories.length)];
 const quote = quotes[randomCategory][Math.floor(Math.random() * quotes[randomCategory].length)];
 res.status(200).json({ quote: quote });
});

app.get('/quotes/:category', (req, res) => {
 const category = req.params.category;
 if (quotes[category]) {
  res.status(201).json(quotes[category]);
 } else {
  res.status(404).json({ error: `Category '${category}' not found` });
 }
});

app.post('/quotes', (req, res) => {
  const category = req.body.category;
  const quote = req.body.quote;
  if (quotes.hasOwnProperty(category)) {
   quotes[category].push(quote);
   res.status(201).json({category: category, quote: quote});
  } else {
  res.status(400).json({ error: `Category '${category}' not found` });
  }
});

app.delete('/quotes/:category', (req, res) => {
  const category = req.params.category;
  if (quotes[category]) {
    delete quotes[category];
    res.status(200).send(`Category '${category}' has been deleted.`);
  } else {
    res.status(404).json({ error: `Category '${category}' not found` });
  }
});
