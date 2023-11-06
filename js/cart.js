const modal = document.querySelector(".modal");
const cartWrapper = document.querySelector(".cart-wrapper");
const cartItems = document.querySelector(".cart-items");
const closeCartButton = document.querySelector(".cart__close-btn");
const openCartButton = document.querySelector(".cart__open-btn");


function closeCart() {
  cartWrapper.style.transform = "translateY(-170px)";
  modal.style.opacity = 0;
  setTimeout(() => (modal.style.display = "none"), 1000);
}


function openCart() {
  renderCart();
  modal.style.display = "block";
  setTimeout(() => {
    modal.style.opacity = 1.5;
    cartWrapper.style.transform = "translateY(10%)";
  }, 0);
}


function deleteItem(e){
  let cartItem = e.target.closest(".cart-item");
  let id = cartItem.id;
  let cart = JSON.parse(localStorage.getItem("cart"));
  delete cart[id]
  localStorage.setItem('cart', JSON.stringify(cart))
  renderCart()
}

function changeQuantity(e) {
  let cartItem = e.target.closest(".cart-item");
  let id = cartItem.id;
  let operation = e.target.getAttribute("operation");
  let cart = JSON.parse(localStorage.getItem("cart"));

  if (operation === "+") cart[id] += 1;
  if (operation === "-" && cart[id] > 1) cart[id] -= 1;
  
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}


async function renderCart() {
  let total = 0;
  let cart = JSON.parse(localStorage.getItem("cart"));
  let cartHtml = `<li class="cart-item cart-header">
                    <div class="cart__item-header-name">Name:</div>
                    <div class="cart__item-header-price">Price:</div>
                    <div class="cart__item-header-quantity">Quantity:</div>
                    <div class="cart__item-header-total">Total:</div>
                  </li>`;

  if (!cart || Object.keys(cart).length === 0) {
    cartHtml += `<li class="cart-item cart-empty">Your cart is empty!</li>`;
    cartItems.innerHTML = cartHtml;
    return;
  }

  const res = await fetch("./api/products.json");
  const products = await res.json();

  for (const id in cart) {
    let product = products.find((product) => product.id === Number(id));
    let itemTotal = cart[id] * product.price;

    cartHtml += `<li class="cart-item" id="${id}">
                   <div class="cart__item-name">${product.title}</div>
                   <div class="cart__item-price">$${product.price}</div>
                   <div class="cart__item-quantity">
                      <span class="cart__change-quant-btn" operation="-">-</span>
                      <span class="cart__quantity-span">${cart[id]}</span>
                      <span class="cart__change-quant-btn" operation="+">+</span>
                   </div>
                   <div class="cart__item-total">$${itemTotal.toFixed(2)}<span class="delete-item-btn"></span></div>
                </li>`;

    total += itemTotal;
  }

  cartHtml += `<li class="cart-item cart-total">Total price: $${total}</li>`;

  cartItems.innerHTML = cartHtml;

  const quantityButtons = cartItems.querySelectorAll('.cart__change-quant-btn');
  const deleteBtns = cartItems.querySelectorAll('.delete-item-btn')

  quantityButtons.forEach((btn) =>
    btn.addEventListener("click", (e) => changeQuantity(e))
  );

  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => deleteItem(e))
  })
}

openCartButton.addEventListener("click", openCart);
closeCartButton.addEventListener("click", closeCart);
