const breadTypes = 
[
    {
        id: "1",
        name: "Quinoa Sourdough",
        description: "Handmade from quinoa, soybeans, and soy flour, this kind of bread contains more protein than many others, and its mild taste makes it ideal to taste with salted butter.",
        image: "img/quinoa.jpg"
    },
    {
        id: "2",
        name: "Danish Sourdough",
        description: "This popular full of texture and flavor Danish bread is healthy, tasty, and can be preserved for a long time. By tradition, it is served with cold butter, meat, fish, or cheese.",
        image: "img/danish.jpg"
    },
    {
        id: "3",
        name: "Cranberry Sourdough",
        description: "Being a classic seasonal centerpiece, this nutritious bread is charged with cranberries and pecans. It can be perfectly combined with cooked meat or cheese.",
        image: "img/cranberry.jpg"
    },
    {
        id: "4",
        name: "Hove Wholemeal",
        description: "This Hove inspired vegan wholemeal loaf is made from such organic ingredients as wholemeal wheat flour, oats, salt, and olive oil. It is ideal to create healthy sandwiches.",
        image: "img/hove.jpg"
    },
]

function renderBreadsTypes (breadTypes){
    let breadTypesDomString = " ";
    for(const breadType of breadTypes){
        breadTypesDomString += `
        <div class="featured__type type">
            <img class="type__image" src="${breadType.image}" alt="${breadType.description}">
            <h3 class="type__title">${breadType.name}</h3>
            <p class="type__description">${breadType.description}</p>
        </div>
        `;
    }
    const breadTypesContainer = document.querySelector(".featured__types");
    breadTypesContainer.innerHTML = breadTypesDomString;
}

renderBreadsTypes(breadTypes);