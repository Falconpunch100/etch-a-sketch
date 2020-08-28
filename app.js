var tiles = []
var erase = document.getElementById("erase")
var eraser = `url('data:image/x-icon;base64,AAACAAEAICACAAAAAAAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAA66TnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAC4AAABuAAAA4AAAAdwAAAO4AAAHcAAABuAAAAXAAAADgAAAAAAAAA///////////////////////////////////////////////////////////////////////////////////////////////////////////+D////A////gP///wD///4A///8Af//+AP///AH///wD///8B////A////wf///8='), auto`;
var erasemode = false;
var board = document.getElementById("board");
var root = document.documentElement;
var fillColorElm = document.getElementById("fillColor")
var tileColorElm = document.getElementById("backgroundColor")
var borderColorElm = document.getElementById("borderColor")
var sizeSettings = document.getElementById("sizeSettings")
var settings = document.getElementById("settings")

function generateTiles(num) {
    tiles = [];
    if (typeof num !== "number") {
        num = 32;
    }
    root.style.setProperty("--NumColumns", num);
    root.style.setProperty("--NumRows", num);
    for (var i = 0; i < num*num; i++) {
        var singleTile = document.createElement("div")
        singleTile.addEventListener("mouseover", function(e) {
            if (erasemode === false) {
            e.target.classList.add("sketched");
            }
            else {
                e.target.classList.remove("sketched");
            }
        });
        singleTile.classList.add("tile")
        tiles.push(singleTile)
    }
}
generateTiles(32)
fillBoard()

function fillBoard() {
    for (var i = 0; i < tiles.length; i++) {
        var element = tiles[i];
        board.appendChild(element)
    }
}

settings.addEventListener("submit", function(e) {
    e.preventDefault()
    var fillColor = fillColorElm.value
    var tileColor = tileColorElm.value
    var borderColor = borderColorElm.value
    var size = sizeSettings.value
    emptyBoard()
    generateTiles(size)
    fillBoard()
    root.style.setProperty("--sketched", fillColor);
    root.style.setProperty("--tileColor", tileColor);
    root.style.setProperty("--boardBorder", borderColor);
});

erase.addEventListener("change", function(e){
    if (e.target.checked === true) {
        root.style.setProperty("--cursor", eraser);
        erasemode = true
    }
    else {
        root.style.setProperty("--cursor", "default");
        erasemode = false;
    }
    console.log(e.target.checked)
});

function emptyBoard() {
    board.innerHTML = ""
}