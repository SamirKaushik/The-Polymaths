import { data } from "./data.js"

//variables
var container = document.getElementById("container");
var searchText = document.getElementById("searchInput");
var search = document.getElementById("searchButton");
var text = "";

//all blogs showed
for (var i = 0; i < data.length; i++) {
  container.innerHTML += `<div class="card m-4" style="width: 18rem;">
    <img src="${data[i].image}" class="card-img-top" alt="${data[i].title}">
    <div class="card-body">
      <h5 class="card-title text-center">${data[i].title}</h5>
      <p class="card-text" style="text-align:justify">${data[i].sample}</p>
      <div class="btn btn-primary" style="width:100%" id="${i}">Read</div>
      </div>
</div>`;
}

//searching and updating DOM
const handleSearch = () => {
  text = text.trim();
  if (text == null) { return }
  else {
    container.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
      if (data[i].title.toLowerCase().includes(text.toLowerCase()) || data[i].sample.toLowerCase().includes(text.toLowerCase())) {
        container.innerHTML +=
          `<div class="card m-4" style="width: 18rem;">
                  <img src="${data[i].image}" class="card-img-top" alt="${data[i].title}">
                  <div class="card-body">
                      <h5 class="card-title text-center">${data[i].title}</h5>
                      <p class="card-text" style="text-align:justify">${data[i].sample}</p>
                      <div class="btn btn-primary" style="width:100%" id="${i}">Read</div>
                  </div>
              </div>`;
      }
    }
  }
}

//search related events
searchText.addEventListener('input', () => {
  text = searchText.value;
})
search.addEventListener('click', handleSearch)
searchText.addEventListener('keypress', (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    handleSearch();
  }
})
