const response = await fetch("/api/products.json");
const products = await response.json();

renderProductsList("Breads");

function renderProductsList(category) {
    const productItems = products.filter(item => item.category === category).map(item => (
        `<li class="menu__item">
            <div class="menu__item-title">
                <span class="menu__item-dish">${item.title}</span>
                <span class="menu__item-price">$${item.price}</span>
                <a href="#" class="menu__item-btn-buy">
                    <svg class="shopping-cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none" />
                        <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6Z"
                            opacity="0.2" />
                        <circle cx="80" cy="216" r="16" />
                        <circle cx="184" cy="216" r="16" />
                        <path class="handle-path"
                            d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                            fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
                    </svg>
                </a>
            </div>
            <p class="menu__item-description">
                ${item.description}
            </p>
        </li>`
    ));

    const productList = document.querySelector(".menu__list");
    productList.innerHTML = productItems.join(" ");
}

const categoryBtns = document.querySelector(".menu__buttons");
const listBtns = document.querySelectorAll(".menu__link")
categoryBtns.addEventListener("click", (event) => {
    listBtns.forEach(btn => {
        btn === event.target ? btn.classList.add("active") : btn.classList.remove("active");
    });
    event.preventDefault();
    renderProductsList(event.target.dataset.category);
});