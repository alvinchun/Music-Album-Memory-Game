# Music Album Matching Game

Link: https://git.generalassemb.ly/pages/alvinchun911/Project1/

## Included Features

* Playable memory game by matching album jackets
* The user can flip only 2 album jackets at once. If the user matches the album jackets, those get removed (matching picks). If not, they flip back to how they were (reset picks).
* Vanillas Javascript (ES6)
* VS Code: A text/code editor I used to make codes for Memory Game.
* Laptop: apple MacBook Pro with Mac OS High Sierra

## How it works

Since I love edm music, I decided to make memory game with album jacket of edm albums. I put the album information in the object in an array including titles and images. And I used concat function to duplicate the cardeck and used forEach function to put each of cards on the board. First pick and second pick have their dataset title get selected, and if the titles are matched they go through the matched function to add match class to make them disappear.

## Challenges

One of the biggest challenge was styling with CSS. I still have a hard time with decorating websites with CSS. Also, I could not think of the way that I can match the cards but I found that adding the dataset value to simply match the titles of albums to be matched. Also without creating every divs on HTML, I could learn to create divs with forEach loop function. One of the biggest ongoing problems is that the timer and move counter are not working.

## Unsolved Problems

My main goal of this project was to playing the music of the certain album jacket when that certain albums are matched. But I couldn't find a way to play 9 different music for 9 different matched pairs while divs are created through the forEach loop.
