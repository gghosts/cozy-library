const searchInput = document.querySelector("[name=subjects]");
const title = document.querySelector(".searched-query");
const cardsContainer = document.querySelector(".results-container");

function formSubmitted(event) {
  event.preventDefault();
  const searchExpression = searchInput.value;
  title.innerHTML = searchExpression + " subjects";
  searchInput.value = "";
  cardsContainer.innerHTML = "";

  fetch(``)
    .then((x) => x.json())
    .then((data) => {
      let imageHtmlList = [];
      for (let card of data.subjects) {
        const url = card.imageUrl;
        const name = card.name;
        if (typeof url !== "undefined") {
          imageHtmlList.push(`<img src="${url}" alt="${name}" />`);
        }
      }
      const html = imageHtmlList.join("");
      cardsContainer.innerHTML = html;
    });
}

document.querySelector("form").addEventListener("submit", formSubmitted);


<script src=""></script>  
fetch('')