const cardDivs = document.querySelectorAll(".locations__card");
const telLinks = document.querySelectorAll(".locations__card-contact");

cardDivs.forEach((div) => {
  div.style.backgroundColor = "#f5f5f5";
  div.style.borderRadius = "10px";
  div.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.2)";
  div.style.padding = "20px 8px";
});

telLinks.forEach((e) => {
  e.addEventListener("mouseover", function () {
    e.style.color = "#3498db";
    e.style.transition = "color 0.3s";
  });
  e.addEventListener("mouseout", function () {
    e.style.color = "initial";
  });
});
