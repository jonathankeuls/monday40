const button = document.getElementById("theButton")

function popupOnclick(){
    alert("Thanks")
    console.log("Thanks")
}

function popupOnmouseover(){
alert("Click!")
console.log("Click")
}



button.onclick = popupOnclick
button.onmouseover = popupOnmouseover