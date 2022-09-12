let count = 0
let countEl = document.getElementById("count-el")
let entries = document.getElementById("save-el")


function increment(){
    count++
    countEl.textContent = count
    
    }
     
function save(){
    let saved = " " + count + " - "
    entries.textContent += saved 
    count = 0
    countEl.textContent = 0
    
}

function reset(){
    count = 0
    countEl.textContent = 0
    entries.textContent = "Previous points: "
}


    
