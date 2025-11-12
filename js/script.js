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


document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("loginPopup");
  const userIcon = document.getElementById("userIcon");
  const closePopup = document.getElementById("closePopup");

  userIcon.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('heroSlider');
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll('.slide'));
  const dotsWrap = document.getElementById('heroDots');
  let current = 0;
  const delay = 4000;
  let interval;

  // Create dots
  dotsWrap.innerHTML = '';
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function update() {
    // Move slider using translateX
    slider.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function next() {
    current = (current + 1) % slides.length;
    update();
  }

  function goTo(i) {
    current = i;
    update();
    restart();
  }

  function start() {
    interval = setInterval(next, delay);
  }

  function pause() {
    clearInterval(interval);
    interval = null;
  }

  function restart() {
    pause();
    start();
  }

  slider.addEventListener('mouseenter', pause);
  slider.addEventListener('mouseleave', start);

  update();
  start();
});
