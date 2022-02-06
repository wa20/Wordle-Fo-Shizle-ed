


function startGame(){

    document.addEventListener('click', handleMouseClick)
    document.addEventListener('keydown', handleKeyPress)

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



startGame()