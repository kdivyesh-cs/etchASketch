//selecting gridContainer
const gridCon = document.querySelector("#gridCon");
//selecting form input
const GridSize = document.querySelector("#GridSize");
//selecting form
const form = document.querySelector("#gridSizeForm")

//function for making grid of input size or default of 16x16 anding mouseover eventlistener over each grid block
function main(inputval) {
    gridCon.innerHTML="";
    gridCon.style.gridTemplateColumns = `repeat(${inputval}, 1fr)`
    gridCon.style.gridTemplateRows = `repeat(${inputval}, 1fr)`
    for(i=0;i<inputval**2;i++) {
        var block = document.createElement("div");
        gridCon.append(block);
        block.classList.add("gridItem");
        block.style.aspectRatio = "1";
    };
    
    const gridItemList = [...document.querySelectorAll(".gridItem")];
    gridItemList.forEach(item => {
    item.addEventListener("touchmove", function (e){
        item.classList.add("color");
    })

    //hover effect
    const gridItemList = [...document.querySelectorAll(".gridItem")];
    gridItemList.forEach(item => {
    item.addEventListener("mouseover", function (e){
        item.classList.add("color");
    });
});
};

main(16);
var newSize = null;
//eventlistner for submitted gridsize
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (GridSize.value > 64 || GridSize.value < 1  ) {
        alert("invalid Input\nMax:64, Min: 1");
    } else {
        newSize = GridSize.value;
        main(newSize)
    };
});


//selecting reset button
reset = document.querySelector("#reset");
reset.addEventListener("click", function () {
    main(16);
});