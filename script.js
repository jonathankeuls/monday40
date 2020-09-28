const button = document.getElementById("theButton")

function popupOnclick(){
    alert("Thanks")
    console.log("Good job")
}

function popupOnmouseover(){
    alert("Click!")
    console.log("Do it")
    }



button.onclick = popupOnclick
button.onmouseover = popupOnmouseover