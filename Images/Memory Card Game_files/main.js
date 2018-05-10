const cardDeck = [
  {
    name: "Alan Walker",
    img: "Images/AlanWalker.jpeg"
  },
  {
    name: "Avicii",
    img: "images/Avicii.jpg"
  },
  {
    name: "Chainsmokers",
    img: "images/Chainsmokers.jpg"
  },
  {
    name: "DavidGuetta",
    img: "images/DavidGuetta.jpg"
  },
  {
    name: "Galantis",
    img: "images/Galantis.jpg"
  }, //-------------------------------
  {
    name: "Martin Garrix",
    img: "images/MartinGarrix.jpeg"
  },
  {
    name: "Tiesto",
    img: "images/Tiesto.jpg"
  },
  {
    name: "Tritonal",
    img: "images/Tritonal.jpg"
  },
  {
    name: "Vicetone",
    img: "images/Vicetone.jpeg"
  },
  {
    name: "AlanWalker-album",
    img: "Images/AlanWalker-album.jpg"
  },
  {
    name: "Avicii",
    img: "images/Avicii-album.jpg"
  },
  {
    name: "Chainsmokers",
    img: "images/Chainsmokers-album.jpg"
  },
  {
    name: "DavidGuetta",
    img: "images/DavidGuetta-album.jpg"
  },
  {
    name: "Galantis",
    img: "images/Galantis-album.jpg"
  }, //-------------------------------
  {
    name: "Martin Garrix",
    img: "images/MartinGarrix-album.jpg"
  },
  {
    name: "Tiesto",
    img: "images/Tiesto-album.jpg"
  },
  {
    name: "Tritonal",
    img: "images/Tritonal-album.jpeg"
  },
  {
    name: "Vicetone",
    img: "images/Vicetone-album.jpg"
  }
];

// Grab the div with an id of root
const game = document.getElementById('game');

// Create a section with a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

// Append the grid section to the game div
game.appendChild(grid);

// For each item in the cardsArray array...
cardDeck.forEach(item => {
  // Create a div
  const card = document.createElement('div');

  // Apply a card class to that div
  card.classList.add('card');

  // Set the data-name attribute of the div to the cardsArray name
  card.dataset.name = item.name;

  // Apply the background image of the div to the cardsArray image
  card.style.backgroundImage = `url(${item.img})`;

  // Append the div to the grid section
  grid.appendChild(card);
});






// const $game = $('#game');
// const $grid = $("<section></section>").addClass("grid");

// $game.append($grid);

// // For each item in the cardsArray array...
// for(item of cardDeck){

// // Create a div
// const card = $('<div></div>').addClass('card');
// card.dataset.name = item.name;

// // Apply the background image of the div to the cardsArray image
// card.style.backgroundImage = `${item.img}`;
// $grid.append($card);


