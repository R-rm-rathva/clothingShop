let cart = [];

function filterProducts(category) {
  document.querySelectorAll(".product").forEach(product => {
    product.style.display =
      category === "all" || product.dataset.category === category ? "block" : "none";
  });
}

function addToCart(name, price) {
  cart.push({ name, price });
  document.getElementById("cart-count").innerText = cart.length;
  alert(`${name} added to cart!`);
}

function openCart() {
  const cartList = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");
  cartList.innerHTML = "";
  let sum = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
    sum += item.price;
  });
  total.innerText = sum;
  document.getElementById("cart-modal").style.display = "block";
}

function closeCart() {
  document.getElementById("cart-modal").style.display = "none";
}

function openForm(type) {
  document.getElementById("form-modal").style.display = "block";
  document.getElementById("login-form").style.display = type === 'login' ? "block" : "none";
  document.getElementById("register-form").style.display = type === 'register' ? "block" : "none";
}

function closeForm() {
  document.getElementById("form-modal").style.display = "none";
}

function switchForm() {
  const login = document.getElementById("login-form");
  const register = document.getElementById("register-form");
  if (login.style.display === "none") {
    login.style.display = "block";
    register.style.display = "none";
  } else {
    login.style.display = "none";
    register.style.display = "block";
  }
}

   // Sample product data grouped by collection
const collections = {
  new: [
    { name: "Men's Shirt", price: 899, image: "images/men-shirt.jpg" },
    { name: "Summer Dress", price: 1299, image: "images/women-dress.jpg" }
  ],
  best: [
    { name: "Kids Wear", price: 599, image: "images/kids-wear.jpg" },
    { name: "Women Jeans", price: 999, image: "images/women-jeans.jpg" }
  ],
  discount: [
    { name: "Old Stock T-Shirt", price: 499, image: "https://via.placeholder.com/200?text=Sale+Tee" },
    { name: "Denim Jacket", price: 799, image: "https://via.placeholder.com/200?text=Denim+Jacket" }
  ]
};

// Function to show selected collection
function showCollection(type) {
  const container = document.getElementById("product-list");
  container.innerHTML = ""; // Clear existing
  collections[type].forEach(product => {
    container.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
      </div>
    `;
  });
}

// Load "new" by default
window.onload = () => {
  showCollection('new');
};

const productList = [
  { name: "Men's Shirt", price: 899, image: "images/men-shirt.jpg" },
  { name: "Summer Dress", price: 1299, image: "images/women-dress.jpg" },
  { name: "Kids Wear", price: 599, image: "images/kids-wear.jpg" },
  { name: "Women Jeans", price: 999, image: "images/women-jeans.jpg" },
  { name: "Denim Jacket", price: 1099, image: "https://via.placeholder.com/200?text=Denim+Jacket" },
  { name: "Casual T-shirt", price: 499, image: "https://via.placeholder.com/200?text=T-Shirt" }
];

let currentSlideIndex = 0;
const productsPerSlide = 3;

function renderSlide() {
  const track = document.getElementById("carousel-track");
  track.innerHTML = "";
  const start = currentSlideIndex * productsPerSlide;
  const end = start + productsPerSlide;
  const slideItems = productList.slice(start, end);

  slideItems.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("carousel-product");
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
    `;
    track.appendChild(div);
  });
}

function nextSlide() {
  const maxIndex = Math.floor(productList.length / productsPerSlide);
  currentSlideIndex = (currentSlideIndex + 1) > maxIndex ? 0 : currentSlideIndex + 1;
  renderSlide();
}

function prevSlide() {
  const maxIndex = Math.floor(productList.length / productsPerSlide);
  currentSlideIndex = (currentSlideIndex - 1 + maxIndex + 1) % (maxIndex + 1);
  renderSlide();
}

// On load
window.onload = () => {
  renderSlide();
};


function openProductModal(name, price, image) {
  document.getElementById("modal-img").src = image;
  document.getElementById("modal-name").innerText = name;
  document.getElementById("modal-price").innerText = `₹${price}`;
  document.getElementById("modal-add-btn").onclick = () => addToCart(name, price);
  document.getElementById("product-modal").style.display = "block";
}

function closeProductModal() {
  document.getElementById("product-modal").style.display = "none";
}


div.innerHTML = `
  <img src="${p.image}" alt="${p.name}" onclick="openProductModal('${p.name}', ${p.price}, '${p.image}')"/>
  <h3>${p.name}</h3>
  <p onclick="openProductModal('${p.name}', ${p.price}, '${p.image}')">₹${p.price}</p>
  <button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
`;
