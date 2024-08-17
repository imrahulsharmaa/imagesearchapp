let searchinput = document.getElementById("search-input");
let searchbutton = document.getElementById("search");
let resultcontainer = document.getElementById("container");
let inputcontainer = document.getElementById("input-container");

let key = "SOMYp-7yI1tSqf8U-pu_lkITbEiL-n8NsIkYGykvD_k";

let page = 1;
async function searchimg() {
    let keyword = searchinput.value;
    const url = `https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=${key}&per_page=30`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    results.map((result) =>{
        let img = document.createElement("img");
        img.src = result.urls.regular;
        resultcontainer.appendChild(img)
    })
}
inputcontainer.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchimg();
})