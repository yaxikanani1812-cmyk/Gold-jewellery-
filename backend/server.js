const express = require('express');
const app = express();
app.use(express.json());

let cart = [];

app.post('/api/add-to-cart', (req, res) => {
  const { id, name, price } = req.body;
  const found = cart.find(item => item.id === id);
  if (found) found.qty += 1;
  else cart.push({ id, name, price, qty: 1 });
  res.json({ success: true, cart });
});

app.get('/api/cart', (req, res) => {
  res.json(cart);
});

app.listen(3000, () => console.log('Server started on port 3000'));
// Node.js Express example route
app.get('/api/products', (req, res) => {
  res.json([
    { name: "ASTRA", price: "₹1,59,999*", image: "/IMG/Sets/3.jpeg" },
    // ...etc.
  ]);
});
