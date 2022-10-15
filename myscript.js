
//input : grid size
var input = 16;
//selecting button
const button = document.getElementById("button")
//selecting gridCon
const gridCon = document.querySelector(".gridCon");

//event listener for grid size prompt on button click
button.addEventListener("click", function getinpt(e) {
        gridCon.innerHTML = "";
        input = prompt("choose n by n grid \n Note: max grid size = 100");
        if (input < 1 || input > 100) {
            alert("invalid input, enter again");
            getinpt();
        };
        makeGrid(input);
    });




// function for making making n by n grid
function makeGrid(inpt){
    for (i=0; i<inpt**2; i++) {
        var aDiv = document.createElement("div");
        gridCon.append(aDiv);
        aDiv.classList.add("gridItem");
    };
}

makeGrid(input)

//list of all grid
const gridB = [...document.querySelectorAll(".gridItem")];


//event listener for changing color each grid item

for (i=0; i<gridB.length; i++) {
    gridB[i].addEventListener("mouseover",e =>{
        e.target.classList.add("color");
    })

    gridB[i].addEventListener("touchmove",e =>{
        e.target.classList.add("color");
    })
}