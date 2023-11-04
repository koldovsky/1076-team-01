const products = [
  { name: "Seasonal Fruit Skyr", price: 4, id: 1 },
  { name: "Danish Roll with Cheese", price: 3, id: 2 },
];
let cart = JSON.parse(lokalStorage.getItem("cart" || {}))
const modal = document.querySelector(".modal");
const cartWrapper = document.querySelector(".cart-wrapper");
const cartItems = document.querySelector(".cartItems");
const closeCartButton = document.querySelector(".cart__close-btn");

function closeCart() {
  cartWrapper.style.transform = "translateY(-300%)";
  modal.style.opacity = 0;
  setInterval(() => (modal.style.display = "none"), 1000);
}

function openCart() {
  modal.style.display = "block";
  modal.style.opacity = 0.5;
  cartWrapper.style.transform = "translateY(300%)";
}

function addItemToCart(e) {
  let id = e.target.data.id;

  if (!cart[id]) {
    cart[id] = 1;
  } else {
    cart[id].quantity = cart[id] + 1;
  }

  lokalStorage.setItem("cart", JSON.stringify(cart));
  renderCart()
}

function changeQuantity(e) {
  e.preventDefault();
  let id = e.currentTarget.getAttribute("id");
  let operation = e.target.getAttribute("operation");
  let cart = JSON.parse(localStorage.getItem("cart"));
  let product = cart[id];

  if (operation === "+") {
    product = product + 1;
  }
  if (operation === "-" && product.quantity > 0) {
    product.quantity = product.quantity - 1;
  }

  lokalStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {
  let total = 0;

  for (const id in cart) {
    let product = products.find((product) => product.id === id);
    let itemTotal = cart[id] * product.price;
    
    const newCartItem = document.createElement("li");
    newCartItem.className = "cart-item";
    newCartItem.id = id;
    newCartItem.innerHTML = `
    <div class="cart__item-name">${product.name}</div>
    <div class="cart__item-price">$${product.price}</div>
    <div class="cart__item-quantity">
        <span class="cart__change-quant-btn" operation="-">-</span>
        <span class="cart__quantity-span">${cart[id]}</span>
        <span class="cart__change-quant-btn" operation="+">+</span>
    </div>
    <div class="cart__item-total">$${itemTotal}</div>
   `;
    total += itemTotal;
    cartItems.appendChild(newCartItem);
  }

  let totalSum = document.createElement("li");
  totalSum.className = "cart-item";
  totalSum.innerHTML = `Total: $${total}`;
  cartItems.appendChild(totalSum);

  let quantityButtons = cartItems.querySelectorAll(".cart__change-quant-btn");
  quantityButtons.forEach((btn) =>
    btn.addEventListener("click", changeQuantity)
  );
}


closeCartButton.addEventListener("click", closeCart);
