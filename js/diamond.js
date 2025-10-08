const products = [
  {
    img: 'necklace1.jpg',
    title: 'Silver Plated AD Cocktail Necklace',
    stars: 4,
    price: 233,
    orig: 424,
    off: 45
  },
  // ...more products
];

// ...rendering function (similar structure as above)
const checkboxes = document.querySelectorAll('.sidebar input[type="checkbox"]');
checkboxes.forEach(box => {
  box.addEventListener('change', function() {
    // Filter logic here: Box.checked thi filtering
    // Tamara product grid modify karo, jem filter select thay te product j dekhaay
  });
});
