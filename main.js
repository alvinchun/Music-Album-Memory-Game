const cardDeck = [
  {
    title: "Animals",
    img: "images/martingarrix-album.jpg"
  },
  {
    title: "Boom",
    img: "images/tiesto-album.jpg"
  },
  {
    title: "Closer",
    img: "images/chainsmokers-album.jpg"
  },
  {
    title: "Faded",
    img: "Images/alanWalker-album.jpg"
  },
  {
    title: "Getaway",
    img: "images/tritonal-album.jpeg"
  }, //-------------------------------
  {
    title: "WorkHardPlayHard",
    img: "images/davidGuetta-album.jpg"
  },
  {
    title: "Runaway",
    img: "images/galantis-album.jpg"
  },
  {
    title: "Tremble",
    img: "images/vicetone-album.jpg"
  },
  {
    title: "WakeMeUp",
    img: "images/avicii-album.jpg"
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

//Radomizing Cards
gameBoard.sort(function() {
  return 0.5 - Math.random();
});

// Displaying each image in the game board
gameBoard.forEach(function(album) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.title = album.title;

  const front = document.createElement("div");
  front.classList.add("front");

  const back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = `url(${album.img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

let firstTarget = null;
let secondTarget = null;
let count = 0;
let counter = document.querySelector(".moves");
let delay = 1300;
let second = 0,
  minute = 0,
  hour = 0;
let timer = document.querySelector(".timer");
timer.innerHTML = "0 mins 0 secs";

let interval;




function startTimer() {

  interval = setInterval(function() {
    timer.innerHTML = minute + "mins " + second + "secs";
    second++;
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
}

let gameStart = function(event) {
let clicked = event.target;

  // Do not allow the grid section itself to be selected; only select divs inside the grid
  if (
    clicked.nodeName === "SECTION" ||
    clicked.parentNode.classList.contains("selected") ||
    clicked === firstPick) {
    return;
  }
  if (count < 2) {
    count++;
    if (count === 1) {
      firstPick = clicked.parentNode.dataset.title;
      clicked.parentNode.classList.add("selected");
    } else {
      secondPick = clicked.parentNode.dataset.title;
      clicked.parentNode.classList.add("selected");
    }
    if (firstPick !== "" && secondPick !== "") {
      if (firstPick === secondPick) {
        setTimeout(matched, delay);
        setTimeout(resetPicks, delay);
      } else {
        setTimeout(resetPicks, delay);
      }
    }
    firstTarget = clicked;
  }
};

grid.addEventListener("click", gameStart);

let matched = function() {
  let selected = document.querySelectorAll(".selected");
  selected.forEach(function(card) {
    card.classList.add("matched");
  });
};

let resetPicks = function() {
  firstPick = "";
  secondPick = "";
  count = 0;

  let selected = document.querySelectorAll(".selected");
  selected.forEach(function(card) {
    card.classList.remove("selected");
  });
};

function moveCounter() {
  count++;
  counter.innerHTML = count;
  //start timer on first click
  if (count == 1) {
    second = 0;
    minute = 0;
    hour = 0;
    startTimer();
  }
}

// Resources:
// https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript
// https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/
// https://developer.mozilla.org/en-US/docs/Web/CSS/::before
// http://archive.modernweb.design/29-building-a-card-matching-game
// https://codepen.io/jamesbarnett/pen/kiGsl
// https://codepen.io/mel/pen/Brads
// https://developer.mozilla.org/en-US/docs/Web/CSS/::before
// https://developer.mozilla.org/en-US/docs/Web/CSS/rotateY
