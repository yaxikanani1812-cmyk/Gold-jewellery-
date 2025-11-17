// ✅ server.js

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // serve your static files (CSS, images, HTML, etc.)

// -------------------- CART API --------------------
let cart = [];

app.post('/api/add-to-cart', (req, res) => {
  const { id, name, price } = req.body;
  const found = cart.find(item => item.id === id);
  if (found) {
    found.qty += 1;
  } else {
    cart.push({ id, name, price, qty: 1 });
  }
  res.json({ success: true, cart });
});

app.get('/api/cart', (req, res) => {
  res.json(cart);
});

// -------------------- PRODUCTS API --------------------
app.get('/api/products', (req, res) => {
  res.json([
    { name: "ASTRA", price: "₹1,59,999*", image: "/IMG/Sets/3.jpeg" },
    { name: "LUNA", price: "₹1,20,000*", image: "/IMG/Sets/5.jpeg" },
    { name: "VIVID", price: "₹1,40,000*", image: "/IMG/Sets/2.jpeg" }
  ]);
});

// -------------------- SLIDER API --------------------
app.get('/api/slides', (req, res) => {
  res.json([
    { id: 1, image: '/IMG/Sider/10.jpg', kicker: 'NEW COLLECTION', title: 'Timeless Elegance', sub: 'Discover handcrafted jewellery', cta: '/Diamond.html' },
    { id: 2, image: '/IMG/Sider/1.jpg.jpg', kicker: 'EXCLUSIVE', title: 'Brilliance That Lasts', sub: 'Crafted to perfection', cta: '/Diamond.html' },
    { id: 3, image: '/IMG/Sider/2.jpg.jpg', kicker: 'LIMITED OFFER', title: 'Festive Offers Up to 30% Off', sub: 'Limited period only', cta: '/offers.html' }
  ]);
});

// -------------------- START SERVER --------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
app.get("/api/slides", (req, res) => {
  res.json([
    {
      image: "/IMG/Sider/7.jpg",
      kicker: "NEW COLLECTION",
      title: "Timeless Elegance in Every Piece",
      sub: "Discover handcrafted jewellery with an everlasting shine",
      cta: "Diamond.html"
    },
    {
      image: "/IMG/Sider/4.jpg",
      kicker: "EXCLUSIVE",
      title: "Brilliance That Lasts",
      sub: "Crafted to perfection — shop our latest diamond range",
      cta: "Gold.html"
    },
    {
      image: "/IMG/Sider/6.jpg",
      kicker: "LIMITED OFFER",
      title: "Festive Offers Up to 30% Off",
      sub: "Celebrate with timeless pieces — limited period only",
      cta: "platinum.html"
    }
  ]);
});





