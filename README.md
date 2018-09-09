# Music Album Matching Game

Link: https://git.generalassemb.ly/pages/alvinchun911/Project1/

## Challenge

To create a memory game app to increase users' memory by matching pairs of music album jackets

## Technologies

* Javascript ES6
* HTML
* CSS

## Included Features

* Playable memory game by matching album jackets
* The user can flip only 2 album jackets at once. If the user matches the album jackets, those get removed (matching picks). If not, they flip back to how they were (reset picks).

## Game Algorithm

Since I love edm music, I decided to make memory game with album jackets of edm albums. I put the album information (name and image) in the object in an array. And I used concat function to duplicate the cardeck and used forEach function to put each of cards on the board. First pick and second pick have their dataset title get selected, and if the titles are matched they go through the matched function to add match class to make them disappear.

## Unsolved Problems

My main goal of this project was to playing the music of the certain album jacket when that certain albums are matched. But I couldn't find a way to play 9 different music for 9 different matched pairs while divs are created through the forEach loop.
