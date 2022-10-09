const grid = document.querySelector(".grid");
const width = 28;
const scoreDisplay = document.getElementById("score");
let squares = [];
let score = 0;

const layout = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0,
  1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1,
  1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4,
  4, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1,
];
//GRID
function createPlayground() {
  for (let i = 0; i < layout.length; i++) {
    const square = document.createElement("div");
    grid.appendChild(square);
    square.classList.add("square");
    squares.push(square);

    if (layout[i] === 0) {
      squares[i].classList.add("pac-dot");
    } else if (layout[i] === 1) {
      squares[i].classList.add("wall");
    } else if (layout[i] === 2) {
      squares[i].classList.add("ghost-lair");
    } else if (layout[i] === 3) {
      squares[i].classList.add("power-pellet");
    }
  }
}
createPlayground();

//PACMAN
let pacmanCurrentIndex = 490;
squares[pacmanCurrentIndex].classList.add("pacman");
let currentDirection = "right"
let pacmanMouth = document.createElement("div");
pacmanMouth.classList.add(`pacman-mouth-${currentDirection}`);
squares[pacmanCurrentIndex].appendChild(pacmanMouth);

//PACMAN MOVEMENT
function control(e) {
  squares[pacmanCurrentIndex].classList.remove("pacman");
  squares[pacmanCurrentIndex].removeChild(pacmanMouth);

  switch (e.key) {
    case "ArrowDown":
      console.log("pressed down");
      if (
        !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair") &&
        !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
        pacmanCurrentIndex + width < width * width
      )

        pacmanCurrentIndex += width;
        currentDirection = "down"
      break;
    case "ArrowUp":
      console.log("pressed up");
      if (
        !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair") &&
        !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
        pacmanCurrentIndex - width >= 0
      )
        pacmanCurrentIndex -= width;
        currentDirection = "up"
      break;
    case "ArrowLeft":
      console.log("pressed left");
      if (
        !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair") &&
        !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
        pacmanCurrentIndex % width !== 0
      )
        pacmanCurrentIndex -= 1;
      if (pacmanCurrentIndex === 364) {
        pacmanCurrentIndex = 391;
      }
      currentDirection = "left"
      break;
    case "ArrowRight":
      console.log("pressed right");
      if (
        !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair") &&
        !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
        pacmanCurrentIndex % width < width - 1
      )
        pacmanCurrentIndex += 1;
      if (pacmanCurrentIndex === 391) {
        pacmanCurrentIndex = 364;
      }
      currentDirection = "right"
      break;
  }
  squares[pacmanCurrentIndex].classList.add("pacman");
  pacmanMouth = document.createElement("div")
   pacmanMouth.classList.add(`pacman-mouth-${currentDirection}`);
  squares[pacmanCurrentIndex].appendChild(pacmanMouth);
  pacDotEaten();
  powerPelletEaten();
  checkForWin();
  checkForGameOver();
}
document.addEventListener("keyup", control);

//PACDOT EATEN
function pacDotEaten() {
  if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
    squares[pacmanCurrentIndex].classList.remove("pac-dot");
    score++;
    scoreDisplay.innerHTML = score;
  }
}

//POWER PELLET EATEN 
function powerPelletEaten() {
  if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
    squares[pacmanCurrentIndex].classList.remove("power-pellet");
    score += 10;
  
    ghosts.forEach((ghost) => (ghost.isScared = true));
    setTimeout(function unScareGhosts() {
      ghosts.forEach((ghost) => (ghost.isScared = false));
    }, 10000);
    ghosts.forEach(ghost => console.log(ghost.isScared))
  }
}

//GHOSTS
class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.isScared = false;
    this.timer = NaN;
  }
}
const ghosts = [
  new Ghost("blinky", 348, 250),
  new Ghost("inky", 351, 300),
  new Ghost("pinky", 376, 400),
  new Ghost("clyde", 379, 500),
];

console.log(ghosts);

ghosts.forEach((ghost) => {
  let ghostTail = document.createElement("div")
ghostTail.classList.add("ghost-tail");
 
  squares[ghost.currentIndex].classList.add(ghost.className);
  squares[ghost.currentIndex].appendChild(ghostTail);
  squares[ghost.currentIndex].classList.add("ghost");
  console.log(ghost);
});

ghosts.forEach((ghost) => moveGhost(ghost));

//GHOST DIRECTION
function getDirection(ghost){
  let directions = []
  if(!squares[ghost.currentIndex].classList.contains("ghost-lair")){
    directions = [1, -1, width, -width]
  }
  else{
    directions = [1, -1, -width]
  }
  let direction = directions[Math.floor(Math.random() * directions.length)];
  return direction

}

//GHOST MOVEMENT
function moveGhost(ghost) {
  ghost.timer = setInterval(function () {
    let direction = getDirection(ghost)
    if (
      !squares[ghost.currentIndex + direction].classList.contains("wall") &&
      !squares[ghost.currentIndex + direction].classList.contains("ghost")
    ) {
      squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
      squares[ghost.currentIndex].classList.remove(ghost.className);

      ghost.currentIndex += direction;

      squares[ghost.currentIndex].classList.add(ghost.className);
      squares[ghost.currentIndex].classList.add("ghost");
      const ghostTail = document.createElement("div");
      ghostTail.classList.add("ghost-tail");
      squares[ghost.currentIndex].appendChild(ghostTail);
    } else {
      // direction = directions[Math.floor(Math.random() * directions.length)];
      direction = getDirection(ghost)
    }
    if(ghost.isScared){
      const ghostTail = document.createElement("div");
      ghostTail.classList.add("scared-ghost-tail");
      squares[ghost.currentIndex].appendChild(ghostTail);
      squares[ghost.currentIndex].classList.add("scared-ghost")

    }
    if(ghost.isScared && squares[ghost.currentIndex].classList.contains("pacman")){
      squares[ghost.currentIndex].classList.remove("ghost",ghost.className,"scared-ghost")
      ghost.currentIndex = ghost.startIndex
      score += 100
      squares[ghost.currentIndex].classList.add("ghost", ghost.className)
    }
    
    checkForGameOver()
  }, ghost.speed);
}

//CHECK FOR GAME OVER
function checkForGameOver(){
  if(squares[pacmanCurrentIndex].classList.contains("ghost")&&
  !squares[pacmanCurrentIndex].classList.contains("scared-ghost")){
    scoreDisplay.textContent = "You LOST!"
    ghosts.forEach(ghost => clearInterval( ghost.timer))
    document.removeEventListener("keyup",control)
  }
}

//CHECK FOR WIN
function checkForWin(){
  if(score === 274){
    ghosts.forEach(ghost => clearInterval(ghost.timer))
    document.removeEventListener("keyup", control)
    scoreDisplay.textContent = "You WON!"
  }
}
