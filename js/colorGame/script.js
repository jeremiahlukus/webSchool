var squares = document.querySelectorAll(".square");
changeColor();
var iter = 1;

function changeColor() {
    for(let i = 1; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
        var clickedColor = squares[i].style.background;
        if(clickedColor == ""){
         clickedColor = "red";
         changeGreen(i);
        }
        if(clickedColor =="red"){
            changeGreen(i);
        }
        else if(clickedColor == "green"){
            changeBlue(i);
        }else{changeRed(i);}
        });
        }
        }


function changeGreen(index){
    var indexh1, indexh2, indexv1, indexv2;
    indexh1 = index - 1;
    indexh2 = index + 1;
    indexv1 = index + 20;
    indexv2 = index - 20; 


  //  squares[index].style.background = "green";
    squares[indexh1].style.background = "green";
    squares[indexh2].style.background = "green";
    squares[indexv1].style.background = "green";
    squares[indexv2].style.background = "green";
}

function changeBlue(index){
    var indexh1, indexh2, indexv1, indexv2;
    indexh1 = index - 1;
    indexh2 = index + 1;
    indexv1 = index + 20;
    indexv2 = index - 20;


//    squares[index].style.background = "blue";
    squares[indexh1].style.background = "blue";
    squares[indexh2].style.background = "blue";
    squares[indexv1].style.background = "blue";
    squares[indexv2].style.background = "blue";
}


function changeRed(index){
    var indexh1, indexh2, indexv1, indexv2;
    indexh1 = index - 1;
    indexh2 = index + 1;
    indexv1 = index + 20;
    indexv2 = index - 20;


   // squares[index].style.background = "red";
    squares[indexh1].style.background = "red";
    squares[indexh2].style.background = "red";
    squares[indexv1].style.background = "red";
    squares[indexv2].style.background = "red";
}



