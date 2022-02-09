import { data } from "./data.js"

//variables
var container=document.getElementById("container");
var searchText = document.getElementById("searchInput");
var search = document.getElementById("searchButton");
var text = "";

//all blogs showed
for (var i = 0; i < data.length; i++) {
  container.innerHTML += `<div class="card m-4" style="width: 18rem;">
    <img src="${data[i].image}" class="card-img-top" alt="${data[i].title}">
    <div class="card-body">
      <h5 class="card-title">${data[i].title}</h5>
      <p class="card-text">${data[i].sample}</p>
      <a href="#" class="btn btn-primary">Read</a>
    </div>
</div>`;
}

//searching and updating DOM
const handleSearch = () => {
  text=text.trim();
  if(text==null){return}
  else{
    container.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
      if (data[i].title.toLowerCase().includes(text.toLowerCase()) || data[i].sample.toLowerCase().includes(text.toLowerCase())) {
              container.innerHTML += 
              `<div class="card m-4" style="width: 18rem;">
                  <img src="${data[i].image}" class="card-img-top" alt="${data[i].title}">
                  <div class="card-body">
                      <h5 class="card-title">${data[i].title}</h5>
                      <p class="card-text">${data[i].sample}</p>
                      <a href="${data[i].link}" class="btn btn-primary">Read</a>
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


