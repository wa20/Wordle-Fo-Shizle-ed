

function startGame(){

    document.addEventListener('click', handleMouseClick)
    document.addEventListener('keydown', handleKeyPress)

}


//mouse handle fucntion
function handleKeyPress(event){

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

function handleKeyPress(event){

}