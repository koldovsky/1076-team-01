const title = document.querySelector('.recipes-breads__title');
const changeTitle = ['Recipes Using Our Breads', 'The best recipes Breads',];
let currentIndex = 0;

function changeTitleText() {
  title.textContent = changeTitle[currentIndex];
  currentIndex = currentIndex + 1;
  if(currentIndex === changeTitle.length){
    currentIndex = 0;
  }
}

setInterval(changeTitleText, 3000);


