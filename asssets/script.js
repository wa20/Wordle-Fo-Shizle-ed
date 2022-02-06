
const guessWord = document.querySelector("[data-guess-word]")

startGame()

//start game
function startGame(){

    document.addEventListener('click', handleMouseClick)
    document.addEventListener('keydown', handleKeyPress)

}

// end game

function endGame(){
    document.removeEventListener('click', handleMouseClick)
    document.removeEventListener('keydown', handleKeyPress)
}

//mouse handle fucntion
function handleMouseClick(event){

    if(event.target.matches("[data-key]")) {
        pressKey(event.target.dataset.key)
        return
    } 
    if(event.target.matches("[data-enter]")){
        submitGuess()
        return
    } 
    if(event.target.matches("[data-delete]")){
        deleteKey()
        return
    } 

}

//keybord handle event
function handleKeyPress(event){
 if(event.key === "Enter"){
     submitGuess()
     return
 }

 if(event.key === "Backspace" || event.key === "Delete"){
     deleteKey()
     return
 }

 if (event.key.match(/^[a-z]$/)){
     pressKey(event.key)
     return
 }
  
}


 

function pressKey(key){
  const nextTile = guessWord.querySelector(":not([data-letter])")
  nextTile.dataset.letter = key.toLowerCase();

  nextTile.textContent = key
  nextTile.dataset.state = "active"
}




function submitGuess(){

}


