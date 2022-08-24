const searchInput = document.getElementById('searchInput');
const container = document.getElementById('container');




searchInput.addEventListener('keyup', (event) =>{
    if(event.key === "Enter"){
        var searchQuery = document.getElementById('searchInput').value;;
        getDrinks(searchQuery);
    }

})

function getDrinks(searchQuery){
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="+searchQuery)
    .then(response => response.json())
    .then(data => updateView(data.drinks, searchQuery))
}

function buildCard(data){
    var col = document.createElement("div");
    col.classList.add("col");

    var card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "14rem";
  
    var image = document.createElement("img");
    image.classList.add("card-img-top");
    image.src = data.strDrinkThumb;
    image.style.width = "100%";

    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    var cardTitle = document.createElement("div");
    cardTitle.innerText = data.strDrink;
    
    cardBody.appendChild(cardTitle);
    card.appendChild(image);
    card.appendChild(cardBody);
    col.appendChild(card);
    return col;
}

function updateView(data, query){

    for (var i = 0 ; i < data.length; i++){
        var card = buildCard(data[i]);
        container.appendChild(card);
    }
    
    document.getElementById('drinkHeader').innerText = "Drinks with " + query;
}

