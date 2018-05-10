const cardDeck = [
  {
    title: "Animals",
    img: "images/MartinGarrix-album.jpg"
  },
  {
    title: "Boom",
    img: "images/Tiesto-album.jpg"
  },
  {
    title: "Closer",
    img: "images/Chainsmokers-album.jpg"
  },
  {
    title: "Faded",
    img: "Images/AlanWalker-album.jpg"
  },
  {
    title: "Getaway",
    img: "images/Tritonal-album.jpeg"
  }, //-------------------------------
  {
    title: "WorkHardPlayHard",
    img: "images/DavidGuetta-album.jpg"
  },
  {
    title: "Runaway",
    img: "images/Galantis-album.jpg"
  },
  {
    title: "Tremble",
    img: "images/Vicetone-album.jpg"
  },
  {
    title: "WakeMeUp",
    img: "images/Avicii-album.jpg"
  }
];

let sound1 = document.getElementById("song1");
let sound2 = document.getElementById("song2");
let sound3 = document.getElementById("song3");
let sound4 = document.getElementById("song4");
let sound5 = document.getElementById("song5");
let sound6 = document.getElementById("song6");
let sound7 = document.getElementById("song7");
let sound8 = document.getElementById("song8");
let sound9 = document.getElementById("song9");



// Grab the div with an id of root
const gameSet = document.getElementById("game");

// Create a section with a class of grid
const grid = document.createElement("section");
grid.classList.add("grid");
gameSet.appendChild(grid);

let gameBoard = cardDeck.concat(cardDeck);

let firstPick = "";
let secondPick = "";
let count = 0;
//Radomizing Cards
gameBoard.sort(function() {
  return 0.5 - Math.random();
});

// Displaying each image in the game board
gameBoard.forEach(function(album) {
  // const card = document.querySelector('div#game > section.grid > div')
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.title = album.title;
  card.style.backgroundImage = `url(${album.img})`;
  grid.appendChild(card);
});

let firstTarget = null;
let secondTarget = null;

grid.addEventListener("click", function(event) {
  // The event target is our clicked item
  let clicked = event.target;

  // Do not allow the grid section itself to be selected; only select divs inside the grid
  if (clicked.nodeName === "SECTION" || clicked === firstTarget) {
    return;
  }
  if (count < 2) {
    count++;
    if (count === 1) {
      firstPick = clicked.dataset.title;
      clicked.classList.add("selected");
    } else {
      secondPick = clicked.dataset.title;
      clicked.classList.add("selected");
    }
    if (firstPick !== "" && secondPick !== "") {
      if (firstPick === secondPick) {
        match();
        // matchSong();
        resetPicks();
      } else {
        resetPicks();
      }
    }
    firstTarget = clicked;
    // secondTarget = clicked;
  }
});

    // if (firstPick === secondPick) {
    //   match();
    //   resetPicks();
    // } else {
    //   resetPicks();
    // }
// function matchSong(){
//   if (cardDeck[0] === cardDeck[0])
//   {
//     sound1.play();
//   }
//   else if (cardDeck[1] === cardDeck[1])
//   {
//     sound2.play();
//   }
//   else if (cardDeck[2] === cardDeck[2])
//   {
//     sound3.play();
//   }
//   else if (cardDeck[3] === cardDeck[3])
//   {
//     sound4.play();
//   }
//   else if (cardDeck[4] === cardDeck[4])
//   {
//     sound5.play();
//   }
//   else if (cardDeck[5] === cardDeck[5])
//   {
//     sound6.play();
//   }
//   else if (cardDeck[6] === cardDeck[6])
//   {
//     sound7.play();
//   }
//   else if (cardDeck[7] === cardDeck[7])
//   {
//     sound8.play();
//   }
//   else if (cardDeck[8] === cardDeck[8])
//   {
//     sound9.play();
//   }
//   else{
//     undefined;
//   }
// };

function match() {
  let selected = document.querySelectorAll(".selected");
  selected.forEach(function(card) {
    card.classList.add("matched");
  });
};

function resetPicks() {
  firstPick = '';
  secondPick = '';
  count = 0;

  let selected = document.querySelectorAll('.selected')
  selected.forEach( function(card){
  card.classList.remove('selected')

  })
};


