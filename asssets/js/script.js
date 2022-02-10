const guessWord = document.querySelector("[data-guess-word]");
const wordLength = 5;
const offsetFromDate = new Date(2022, 0, 1)
const milliSecondOffset = Date.now() - offsetFromDate
const dayOffset = milliSecondOffset / 1000 / 60 / 60 / 24
const targetWord = wordOfTheDay[Math.floor(dayOffset)]
console.log(targetWord)
startGame();

//start game
function startGame() {
  document.addEventListener("click", handleMouseClick);
  document.addEventListener("keydown", handleKeyPress);
}

// end game

function endGame() {
  document.removeEventListener("click", handleMouseClick);
  document.removeEventListener("keydown", handleKeyPress);
}

//mouse handle fucntion
function handleMouseClick(event) {
  if (event.target.matches("[data-key]")) {
    pressKey(event.target.dataset.key);
    return;
  }
  if (event.target.matches("[data-enter]")) {
    submitGuess();
    return;
  }
  if (event.target.matches("[data-delete]")) {
    deleteKey();
    return;
  }
}

//keybord handle event
function handleKeyPress(event) {
  if (event.key === "Enter") {
    submitGuess();
    return;
  }

  if (event.key === "Backspace" || event.key === "Delete") {
    deleteKey();
    return;
  }

  if (event.key.match(/^[a-z]$/)) {
    pressKey(event.key);
    return;
  }
}

function pressKey(key) {
  const activeTiles = getActiveTiles();
  if(activeTiles.length >= wordLength) return
  

  const nextTile = guessWord.querySelector(":not([data-letter])");
  nextTile.dataset.letter = key.toLowerCase();
  nextTile.textContent = key;
  nextTile.dataset.state = "active";
  

}

function getActiveTiles() {
    return guessWord.querySelectorAll("[data-state='active']")
}


function deleteKey() {
  const activeTiles = getActiveTiles()
  const lastTile = activeTiles[activeTiles.length - 1]

  if(lastTile == null) return

  lastTile.textContent= ""
  delete lastTile.dataset.state
  delete lastTile.dataset.letter

}

function submitGuess() {}
