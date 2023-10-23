const options = [
    {
        id: "1",
        title: "The breakfast",
        img: "img/catering-breakfast.jpeg",
        category: "breakfast"
    },
    {
        id: "2",
        title: "The Lunch",
        img: "img/catering-lunch.jpeg",
        category: "lunch"
    },
    {
        id: "3",
        title: "Quiches",
        img: "img/catering-quiches.jpeg",
        category: "quiches"
    },
    {
        id: "4",
        title: "Salads",
        img: "img/catering-salads.jpeg",
        category: "salads"
    },
    {
        id: "5",
        title: "The Party",
        img: "img/catering-party.jpeg",
        category: "party"
    },
    {
        id: "6",
        title: "The Finale",
        img: "img/catering-finale.jpeg",
        category: "finale"
    },
    {
        id: "7",
        title: "Drinks",
        img: "img/catering-drinks.jpeg",
        category: "drinks"
    },
    {
        id: "8",
        title: "Specials",
        img: "img/catering-specials.jpeg",
        category: "specials"
    }
]

function renderCatering(items) {
    let itemsDomString = "";
    items.forEach(item => {
        itemsDomString += `
        <li class="catering__item">
            <div class="catering__item-visual">
                <img class="catering__${item.category}" src="${item.img}" alt="${item.title}">
            </div>
            <h3 class="catering__item-title">${item.title}</h3>
        </li>`
    });
    const cateringList = document.querySelector(".catering__list");
    cateringList.insertAdjacentHTML("beforeend", itemsDomString);
}

renderCatering(options);