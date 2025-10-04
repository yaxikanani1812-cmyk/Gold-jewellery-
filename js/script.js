   const cart = [];
const product = [
  { id: 1, name: "Rose Gold Pretty Woman Necklace", price: 7399 },
  { id: 2, name: "Silver Deer Heart in Red Necklace", price: 2699 },
  { id: 3, name: "Golden Glint Pendant With Link Chain", price: 2699 },
  { id: 4, name: "Rose Gold Skipper Butterfly Earrings", price: 1899 }
];

document.querySelectorAll('.add-to-cart-btn').forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    const prod = product[idx];
    const existing = cart.find(item => item.id === prod.id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...prod, qty: 1 });
    }
    renderCart();
  });
});

function renderCart() {
  const list = document.getElementById('cart-items');
  list.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    list.innerHTML += `<li>${item.name} × ${item.qty} = ₹${item.qty * item.price}</li>`;
    total += item.qty * item.price;
  });
  document.getElementById('cart-total').textContent = total ? `Total: ₹${total}` : "";
}

// Optional: closes mega menu if user tabs out of menu
document.addEventListener("click", function(e){
  var mb = document.querySelector(".nav-box");
  if(mb && !mb.contains(e.target) && !e.target.closest('.diamond-dropdown')){
    mb.style.display = "none";
  }
});
// For backend, you can fetch product data and create cards dynamically.
const products= [
 { name: "ASTRA", price: "₹1,59,999*", image: "/IMG/Sets/3.jpeg" },
  // ... more products
];
