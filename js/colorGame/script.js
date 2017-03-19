drawSquares();
var squares = document.querySelectorAll(".square");
doChangeColor();

function drawSquares() {
    var containerDiv = document.createElement("div");
    containerDiv.id = "container";
    document.body.appendChild(containerDiv);
    for (let i = 0; i < 400; i++) {
        var square = document.createElement("div");
        square.className = "square";
        containerDiv.appendChild(square);
    }
}

function doChangeColor() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            //which squares need to be changed
            var changeArray = findSquaresToChange(i);
            //go through and change them based on current color
            for (let j = 0; j < changeArray.length; j++) {
                var currentSquareIdx = changeArray[j];
                var squareCurrentColor = squares[currentSquareIdx].style.background;
                var squareNewColor = findColor(squareCurrentColor);
                changeSquareColor(currentSquareIdx, squareNewColor);
            }
        });
    }
}

function findSquaresToChange(index) {
    //check for all the edge cases
    //top left
    if (index === 0) {
        return [index, index + 1, index + 19, index + 20, index + 380];
    }
    //top right
    if (index === 19) {
        return [index, index - 1, index - 19, index + 20, index + 380];
    }
    //top row
    if (index < 20) {
        return [index, index + 1, index - 1, index + 20, index + 380];
    }
    //bottom left
    if (index === 380) {
        return [index, index - 20, index + 1, index + 19, index - 380];
    }
    //bottom right
    if (index === 399) {
        return [index, index - 20, index - 1, index - 19, index - 380];
    }
    //left side
    if (index % 20 === 0) {
        return [index, index - 20, index + 20, index + 1, index + 19];
    }
    //right side
    if ((index + 1) % 20 === 0) {
        return [index, index - 20, index + 20, index - 19, index - 1];
    }
    //bottom row
    if (index > 380) {
        return [index, index - 1, index + 1, index - 20, index - 380];
    }

    //a square that's not on the edge
    return [index, index - 1 , index + 1, index + 20, index - 20];
}

function findColor(color) {
    if (color === "" || color === "red") {
        return "green";
    } else if (color === "green") {
        return "blue";
    } else if (color === "blue") {
        return "red";
    }
}

function changeSquareColor(index, color) {
    squares[index].style.background = color;
}
